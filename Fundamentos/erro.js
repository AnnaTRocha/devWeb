function tratarErroELancar(erro){
    //throw new Error('...')
    throw 'mensagem tal'
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)