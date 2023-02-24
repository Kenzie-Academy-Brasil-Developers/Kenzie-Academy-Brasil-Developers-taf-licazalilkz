// Variáveis para aplicar os resultados do teste. Não as altere.
const gender = process.argv[2]; // Sexo 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

// ESCREVER COMENTARIO EXPLICANDO A LOGICA !!!!

// confere se é homem
if(gender == "male"){
    //confere a altura, pelo menos 1,70 de altura
    if(height>1.69){
        //confere teste de barra, pelo menos 6 repetições de barra ou no máximo 15 segundos de duração.
        if(barReps>5 || barSeconds<16){
            //confere abnominas, pelo menos 41 abdominais.
            if(abs>40){
                //confere a corrida, pelo menos 3km em no máximo 12 min de corrida ou pelo menos 5km em no máximo 20 min de corrida.
                if(runDistance>2999 && runTime<721 || runDistance>4999 && runTime<1201){
                    //confere a natacao, pelo menos 100m em no máximo de 1 min de natação ou no máximo 30s de mergulho.
                    if(swimDistance>99 && swimTime<61 || diveTime<31){
                        passed=true;
                    }
                }
            }
        }
    }
}

//confere se e mulher
if(gender == "female"){
    //confere a altura, pelo menos 1,60 de altura.
    if(height>1.59){
        //confere teste de barra, pelo menos 5 repetições de barra ou no máximo 12 segundos de duração.
        if(barReps>4 || barSeconds<13){
             //confere abnominas, pelo menos 41 abdominais.
            if(abs>40){
                //confere a corrida, pelo menos 4km em no máximo 15 min de corrida ou pelo menos 6km em no máximo 22 min de corrida.
                if(runDistance>3999 && runTime<901 || runDistance>5999 && runTime<1321){
                    //confere a natacao, pelo menos 100m em no máximo 1 min de natação ou no máximo 30s de mergulho.
                    if(swimDistance>99 && swimTime<61 || diveTime<31){
                        passed=true;
                    }
                }
            }
        }
    }
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);