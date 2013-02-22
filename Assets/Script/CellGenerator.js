var cellPrefab:GameObject;
var cellArray:Array;
var cellSize:int=10;
var cellLength:int=6;

private var vec:Vector3;
private var i:int;
private var j:int;


function Start () {
	for (i=0;i<=cellLength;i++){
		for(j=0;j<=cellLength;j++){
		trans=Vector3(i*cellSize,j*cellSize,0);
			Instantiate(cellPrefab,trans,Quaternion.Euler(-90,0,0));
				}
			}	
}

function Update () {

}