const service = require('./service');
// console.log(service.firstFunction);

describe('teste exercicio 01', () => {
  it('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    // service.randomNumbers = jest.fn().mockReturnValue(10);
    const mockRandomNumbers = jest.spyOn(service, 'randomNumbers').mockReturnValue(10);

    expect(service.randomNumbers()).toBe(10);
    expect(service.randomNumbers).toHaveBeenCalledTimes(1)
    expect(service.randomNumbers).toHaveBeenCalled();
  });

  it('crie uma nova implementação, que deve receber três parâmetros e retornar a multiplicação dos parametros', () => {
    service.randomNumbers = jest.fn().mockImplementation((a, b) => a/b)

    expect(service.randomNumbers(50, 10)).toBe(5);
    expect(service.randomNumbers).toHaveBeenCalled();
    expect(service.randomNumbers).toHaveBeenCalledTimes(1);
  });

  it('crie uma nova implementação, que deve receber três parâmetros e retornar a multiplicação dos parametros', () => {
    service.randomNumbers = jest.fn().mockImplementation((a, b, c) => a*b*c)

    expect(service.randomNumbers(5, 3, 4)).toBe(60);
    expect(service.randomNumbers).toHaveBeenCalled();
    expect(service.randomNumbers).toHaveBeenCalledTimes(1);
    expect(service.randomNumbers).toHaveBeenCalledWith(5, 3, 4)
  });

  it('Crie uma nova implementação que receba um parametro e devolva o seu dobro', () => {
    service.randomNumbers.mockReset();

    expect(service.randomNumbers).not.toHaveBeenCalled();

    service.randomNumbers = jest.fn().mockImplementation((a) => a * 2 );

    expect(service.randomNumbers(2)).toBe(4);
    expect(service.randomNumbers).toHaveBeenCalledTimes(1);
    expect(service.randomNumbers).toHaveBeenCalledWith(2);
  })

});

describe('Implementando funções com strings', () => {
  it('mockando função que recebe string upercase e devolve lowercase', () => {    
    // service.firstFunction = jest.spyOn();
    service.firstFunction = jest.fn().mockImplementation((a) => a.toLowerCase() );
    // service.firstFunction()
    expect(service.firstFunction('MAIUSCULA')).toBe('maiuscula')
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
      
  })
})
