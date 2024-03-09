let i = 0;
while(i < 6){
    i++;
    if(i === 2){
        continue; // si entra aca ignora el codigo debajo y vuelve al while
    }
    if(i === 4){
        break; //detiene la ejecucion del loop
    }
    console.log(i);
}