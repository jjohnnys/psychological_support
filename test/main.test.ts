import Main from "../src/main"

let main: Main;

beforeEach(function() {
    main = new Main();
})

/* test('Deve registrar um atendimento', function() {
    const main = new Main();

    main.support('Seiya');
}) */

/* test('Deve buscar o valor total finaceiro dos atendimentos de um paciente', async function() {
    main = new Main();
   
    const total = await main.financial('June');

    expect(total).toBe(200);


}) */

/* test('Inserir paciente', async function () {

    await main.insertPatient("Saori", 15, '89.471.652-7', '879.654-895.75' , "Mensal", 380, 'Manda tudo');

    const patiente = await main.getPatientByCpf('89.471.652-75');
    

    expect(patiente.cpf).toBe('879.654-895.75');
    
}) */


/* test('Deve inserir pagamneto de paciente mensal', async function() {

    const datePayment = new Date("2023-03-26");
    const payment = await main.insetPayment("Saori, datePayment, 380);

    expect(payment.value).toBe(380);

}) */

test('Deve retornar um pagamento', async function() {
    const payment = await main.getPaymentByPatient("Saori");
    expect(payment.value_payment).toBe("380");    
});

