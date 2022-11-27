const username = 'ladygal'
const pass = 'Lygs3160'
const dataBase = 'BdProjectEGDA_1'
const stringConn = `mongodb+srv://${username}:${pass}@clustermisiontic.zooxhus.mongodb.net/${dataBase}?retryWrites=true&w=majority
`

module.exports =  { stringConn } ;
// module.exports =  stringConn  ; //exportacion por defecto





