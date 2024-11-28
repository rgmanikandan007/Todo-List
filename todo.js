document.getElementById("btnData").addEventListener("click", function(){
    const inputDatas = document.getElementById("inputData");
    const inputText = inputDatas.value.trim();

    if(inputText !== ""){
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");

        li.innerHTML = inputText;
        deleteBtn.innerHTML = "Remove";

        deleteBtn.addEventListener("click", function(){
            li.remove();
        })

        li.appendChild(deleteBtn);


        const unOrderlist = document.getElementById("taskList");
        unOrderlist.appendChild(li);

        inputDatas.value = "";

    } else {
        alert("Please Enter the Task");
    }

})