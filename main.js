window.onload = function() {
    const canvas = document.getElementById('field');
    const field = canvas.getContext('2d');
    
    //これらの変数に(キャラの)画像データを代入できるようにしておく
    const als_down = new Image();
    const als_up = new Image();
    const als_right = new Image();
    const als_left = new Image();
    
    //座標用の変数
    var x = (canvas.width - als_down.width) / 2;
    var y = (canvas.height - als_down.height) / 2;

    //画像読み込みが遅いのでここあらかじめ読み込んでおく
    als_down.src = "../img/als_down.png";
    als_up.src = "../img/als_up.png";
    als_right.src = "../img/als_right.png";
    als_left.src = "../img/als_left.png";
    
    //初期位置にキャラを配置
    field.drawImage(als_down, x, y);

    //入力したキー(↑,↓,→,←)を識別して、それぞれ押したときの処理を書く
    document.body.addEventListener('keydown',
        event => {
            switch (event.key) {
                //↓キー押したときに動く
                case 'ArrowDown':
                    //上で宣言した変数にキャラ画像を代入
                    als_down.src = "../img/als_down.png"
                    if (y < 352) {
                        //Canvasを再描画する
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        //座標の数値を更新して、キャラ画像を描画する
                        field.drawImage(als_down, x, y+=als_down.height);
                        console.log("x="+x+","+"y="+y);
                    } else {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_down, x, y);
                    }
                    break;
            
                //↑キー押したときに動く
                case 'ArrowUp':
                    als_up.src = "../img/als_up.png"
                    if (y > 10) {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_up, x, y-=als_up.height);
                        console.log("x="+x+","+"y="+y);
                    } else {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_up, x, y);
                    }
                    break;

                //→キー押したときに動く
                case 'ArrowRight':
                    als_right.src = "../img/als_right.png"
                    if (x < 352) {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_right, x+=als_right.height, y);
                        console.log("x="+x+","+"y="+y);
                    } else {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_right, x, y);
                    }
                    break;
                
                //←キー押したときに動く
                case 'ArrowLeft':
                    als_left.src = "../img/als_left.png"
                    if (x > 10) {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_left, x-=als_left.height, y);
                        console.log("x="+x+","+"y="+y);
                    } else {
                        field.clearRect(0, 0, canvas.width, canvas.height);
                        field.drawImage(als_left, x, y);
                    }
                    break;
            }
        });

    //↓↓↓↓モバイル用の処理↓↓↓↓

    //下
    const dwn = document.getElementsByClassName('area-g4')[0];
    dwn.addEventListener('click', dnfnc, false);
    function dnfnc() {
        als_down.src = "../img/als_down.png";
        if (y < 352) {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_down, x, y+=als_down.height);
            console.log("x="+x+","+"y="+y);
        } else {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_down, x, y);
        }
    }
    
    //上
    const tch_up = document.getElementsByClassName('area-g3')[0];
    tch_up.addEventListener('click', upfnc, false);
    function upfnc() {
        als_up.src = "../img/als_up.png";
        if (y > 10) {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_up, x, y-=als_up.height);
            console.log("x="+x+","+"y="+y);
        } else {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_up, x, y);
        }
    }
    
    //右
    const tch_right = document.getElementsByClassName('area-g1')[0];
    tch_right.addEventListener('click', rtfnc, false);
    function rtfnc() {
        als_right.src = "../img/als_right.png";
        if (x < 352) {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_right, x+=als_right.height, y);
            console.log("x="+x+","+"y="+y);
        } else {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_right, x, y);
        }
    }
    
    //左
    const tch_left = document.getElementsByClassName('area-g2')[0];
    tch_left.addEventListener('click', ltfnc, false);
    function ltfnc() {
        als_left.src = "../img/als_left.png";
        if (x > 10) {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_left, x-=als_left.height, y);
            console.log("x="+x+","+"y="+y);
        } else {
            field.clearRect(0, 0, canvas.width, canvas.height);
            field.drawImage(als_left, x, y);
        }
    }
};