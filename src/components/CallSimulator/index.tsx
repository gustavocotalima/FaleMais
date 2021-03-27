import  { useContext, useEffect, useState } from 'react';
import { PlansContext } from '../../PlansContext';
import { DDDsContainer, Container, Simulator, PlanContainer, Button , TimeRange, ResultContainer} from './styles';

interface DDD {
    id: number;
    code: string;
}

interface CallValue {
    id: number;
    origin: number;
    destination: number;
    value: number;
}

export function CallSimulator() {
    
    const [DDDs, setDDDs] = useState<DDD[]>([]);
    const [callValues, setCallValues] = useState<CallValue[]>([]);
    const plans = useContext(PlansContext);

    useEffect(() => {
        fetch('http://localhost:3000/api/DDDs').then(response => response.json()).then(data => setDDDs(data))
        fetch('http://localhost:3000/api/callvalues').then(response => response.json()).then(data => setCallValues(data))
    }, []);

    const [originDDD, setOriginDDD] = useState(0);
    const [avaliableDestinationDDD, setAvaliableDestinationDDD] = useState<boolean[]>([]);
    const [destinationDDD, setDestinationDDD] = useState(0);
    const [plan, setPlan] = useState(0);
    const [callTime, setCallTime] = useState(0);
    const [callValueWithoutFaleMais, setCallValueWithoutFaleMais] = useState(0);
    const [callValueWithFaleMais, setCallValueWithFaleMais] = useState(0);

    function handleChangeOriginDDD(newValue: number){
        setOriginDDD(newValue);
        setDestinationDDD(0);
        checkAvaliableDestinationDDD(newValue);
    }

    function checkAvaliableDestinationDDD(newValue: number){
        let newAvaliableDestinationDDD : boolean[] = [false];
        DDDs.forEach(DDD => {
            newAvaliableDestinationDDD[DDD.id] = false;
        });

        callValues.forEach(callValue => {
            if (callValue.origin === newValue) {
                newAvaliableDestinationDDD[callValue.destination] = true;
            }
        });
        
        setAvaliableDestinationDDD(newAvaliableDestinationDDD);
    }

    function handleChangeDestinationDDD(newValue: number){
        setDestinationDDD(newValue);
    }

    function handleChangeCallTime(event: any, newValue: number | number[]){
        setCallTime(newValue as number);
    }

    function calcSimulation(){
        let planDiscount : number = 0;
        plans.forEach(p => {
            if (plan===p.id)
                planDiscount=p.freeTime;
        })

        callValues.forEach(callValue => {
            if (callValue.origin === originDDD && callValue.destination === destinationDDD) {
                setCallValueWithoutFaleMais(callValue.value*callTime);
                if (callTime<planDiscount)
                    setCallValueWithFaleMais(0)
                else
                    setCallValueWithFaleMais((callValue.value*1.1)*(callTime-planDiscount));
            }
        });
        
    }

    return(
        <Container>
            <h1>Simule o valor da ligação com o plano FaleMais</h1>
            <Simulator>
                <form>
                    <label>DDD Origem</label>
                    <DDDsContainer>
                        {DDDs.map(DDD=>(
                            <Button 
                            type="button" 
                            key={DDD.id} 
                            isSelected={originDDD === DDD.id}
                            onClick={() => { handleChangeOriginDDD(DDD.id);}}>
                                {DDD.code}
                            </Button>
                        ))}
                    </DDDsContainer>

                    <label>DDD Destino</label>
                    <DDDsContainer>
                        {DDDs.map(DDD=>(
                            <Button 
                            type="button" 
                            disabled={avaliableDestinationDDD[DDD.id]?false:true}
                            key={DDD.id} 
                            isSelected={destinationDDD === DDD.id}
                            onClick={() => { handleChangeDestinationDDD(DDD.id);}}>
                                {DDD.code}
                            </Button>
                        ))}
                    </DDDsContainer>


                    <label>Plano</label>
                    <PlanContainer>
                        {plans.map(p => (
                        <Button 
                        type="button" 
                        key={p.id} 
                        isSelected={plan === p.id}
                        onClick={() => {setPlan(p.id);}}>
                            <img src={p.logo} alt={p.name}></img>
                        </Button>
                        ))}
                    </PlanContainer>

                    <label>Tempo (Minutos)</label>
                    <TimeRange
                    min={0}
                    max={400}
                    value={callTime}
                    valueLabelDisplay="auto"
                    onChange={handleChangeCallTime}
                    />
                    <Button 
                        type="button" 
                        disabled={(originDDD!==0)&&(destinationDDD!==0)&&(plan!==0)&&(callTime!==0)?false:true}
                        onClick={calcSimulation}>Calcular
                    </Button>
                </form>
                <ResultContainer>
                     <div>
                        <header>
                            <p>Custo de ligação padrão</p>
                        </header>
                        <h1 className="red">
                        {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency: 'BRL'}
                            ).format(callValueWithoutFaleMais)}
                        </h1>
                    </div>
                    <div>
                        <header>
                            <p>Custo de ligação com FaleMais</p>
                        </header>
                        <h1 className="green"> 
                        {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency: 'BRL'}
                            ).format(callValueWithFaleMais)}
                        </h1>
                    </div>
                </ResultContainer>
            </Simulator>
        </Container>    
        
    )
}