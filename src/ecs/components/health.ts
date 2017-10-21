import Component from '../component';

export default class Health extends Component{
    static compName: string = "health";
    health : number;
    constructor(health: number){
        super(Health.compName);
        this.health = health;
    }
}