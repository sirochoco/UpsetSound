static var selectedGameObject:GameObject;
private var toggleColor:boolean;

function Start () {
toggleColor=true;
}

function Update () {

//ステータス切り替えで色を変更する
	if(toggleColor==true){
		this.gameObject.renderer.material.color=Color.red;
		}else if(toggleColor==false){
		this.gameObject.renderer.material.color=Color.cyan;
	}
}

function OnMouseDown(){
	var ray:Ray;
	var hit:RaycastHit;
	//マウスカーソルの位置からカメラに表示された画面の奥方向へのRayを取得
	ray=Camera.main.ScreenPointToRay(Input.mousePosition);
	//取得したRayの値、Rayと衝突したオブジェクトの情報、Rayの距離
		if(Physics.Raycast(ray,hit,100)){
			selectedGameObject=hit.collider.gameObject;
			
			//選択された（自身）オブジェクトのステータスを切り替える
			if(toggleColor==true){
				toggleColor=false;
			}else{
		toggleColor=true;
	}
			//Debug.Log(selectedGameObject.name);
		}else{
		selectedGameObject=null;
		}
}