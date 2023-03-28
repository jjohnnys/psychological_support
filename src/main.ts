import pgp from "pg-promise";
import crypto from "crypto";

export default class Main {

    support(patienteName: string): void {
        console.log(`Nome Paciente ${patienteName}`);
    }

    async financial(patienteName: string): Promise<number> {

        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const [options] = await connection.query("select count(*) from ps.financial where patient = $1 and month = $2", [patienteName, new Date().getMonth() + 1]);
        console.log(`Quantidade ==> ${options.count}`);
        
        if(options.count == 0) {
            const payments = await connection.query("select * from ps.payment where patient = $1 and DATE_PART('MONTH', date_payment) = $2", [patienteName, new Date().getMonth() + 1]);
            let total = 0;
            for(const payment of payments) {
                total += parseInt(payment.value);
            }
            console.log(`Total ${total}`);
            await connection.query("insert into ps.financial (id_financial, patient, price, year, month) values ($1, $2, $3, $4, $5)", [1, patienteName, total, new Date().getFullYear(), new Date().getMonth() + 1]);
        }
        const [totalFinancial] = await connection.query("select price from ps.financial where patient = $1", patienteName);
        await connection.$pool.end();
        return totalFinancial.price;

    }

    async insertPatient(name: string, age: number, rg: string, cpf: string, package_plan: string, price: number, observation: string) {
        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const id_patient = crypto.randomUUID();
        await connection.query("insert into ps.patient (id_patient, name, age, rg, cpf, package, price, observation) values ($1, $2, $3, $4, $5, $6, $7, $8)", [id_patient, name, age, rg, cpf, package_plan, price, observation]);          
        await connection.$pool.end();
        console.log(`Paciente cadastrado ${name}`);
    }

    async getPatientByCpf(cpf: string) {
        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const [patient] = await connection.query("select * from ps.patient where cpf = $1", cpf);
        await connection.$pool.end();
        return patient;

    }

    async getPatientByName(name: string) {
        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const [patient] = await connection.query("select * from ps.patient where name = $1", name);
        await connection.$pool.end();
        return patient;

    }


    async insetPayment(name: string, valuePayment: number, datePayment?: Date){
        if(!datePayment) datePayment = new Date();
        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const id_payment = crypto.randomUUID();
        await connection.query("insert into ps.payment (id_payment, patient, date_payment, value_payment) values ($1, $2, $3, $4)", [id_payment, name, datePayment, valuePayment]);          
        await connection.$pool.end();
    };

    async getPaymentByPatient(name: string): Promise<Payment> {
        const connection = pgp()("postgres://postgres:adminrrR@localhost:5432/app");
        const [payment] = await connection.query("select * from ps.payment where patient = $1", name);
        console.log(payment.patient)
        await connection.$pool.end();
        return payment;
    }

}

type Payment = {
    name: string;
    value_payment: number;
    datePayment: Date;
}

