//ids vom dom holen
function churchId(ids){

    let ids=[];
    
    for (let i = 1; i <= 12; i++) {
        ids.push(`church-${i}`);
    }
    return ids;
}
