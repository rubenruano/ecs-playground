import Component from '../component';

export default class Position extends Component{
    static compName: string = "position";
    x : number;
    y : number;
    constructor(x: number, y: number){
        super(Position.compName);
        this.x = x;
        this.y = y;
    }
}