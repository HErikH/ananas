window.onload = function () {
    var but1 = document.getElementById('but1');
    var but2 = document.getElementById('but2');
    var but3 = document.getElementById('but3');
    var but4 = document.getElementById('but4');
    var gin = document.getElementById('gin');
    var dr = 0;
    var kg = 0;
    //+
    but3.onclick = function () {
        dr += 1600;
        kg += 1;
        gin.value = kg.toFixed(1);
        document.getElementById('dram').innerText = `${dr} Դ`;
    }
    but4.onclick = function () {
        dr += 160;
        kg += 0.1;
        gin.value = kg.toFixed(1);
        document.getElementById('dram').innerText = `${dr} Դ`;
    }
    //-
    but1.onclick = function () {
        dr > 0 ? dr -= 1600 : dr = 0;
        kg > 0 ? kg -= 1 : kg = 0;
        gin.value = kg.toFixed(1);
        document.getElementById('dram').innerText = `${dr} Դ`;
        if (gin.value == 0) {
            kg = 0;
            dr = 0;
            gin.value = kg.toFixed(1);
            document.getElementById('dram').innerText = `${dr}0.0 Դ`;
        }
        if (kg != Math.abs(kg)) {
            kg = 0;
            dr = 0;
            gin.value = kg.toFixed(1);
            document.getElementById('dram').innerText = `${dr}0.0 Դ`;
        }
    }
    but2.onclick = function () {
        dr > 0 ? dr -= 160 : dr = 0;
        kg > 0 ? kg -= 0.1 : kg = 0;
        gin.value = kg.toFixed(1);
        document.getElementById('dram').innerText = `${dr} Դ`;
        if (gin.value == 0) {
            kg = 0;
            dr = 0;
            gin.value = kg.toFixed(1);
            document.getElementById('dram').innerText = `${dr}0.0 Դ`;
        }
        if (kg == -0.1) {
            kg = 0;
            dr = 0;
            gin.value = kg.toFixed(1);
            document.getElementById('dram').innerText = `${dr}0.0 Դ`;
        }
    }

}
//HTML element@ pointerEvents-@ none-i depqum anjatuma bolor sobitianer@ mkniki het kapva& orinak(hover,onclick,focus ev ayln)
//Isk pointerEvents auto-i depqum heta berem standart ashxatanqi dzev@ ases ci exel pointerEvents none            
//toFixed() karoxanumes cuyc tal kotorakayin masn qani tvica linelu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                