alert("Hozir sizga random son chiqariladi😉");

let randomSon = Math.floor(Math.random() * 50)

alert(`Sizga chiqarilgan random son: ${Math.floor(randomSon)}`);

let result = confirm("Biz random sonni 2ga bo'lmoqchimiz va ko'paytirmoqchimiz!")

if(result){
    alert(`Random orqali chiqqan son ${randomSon}: \n biz uni 2ga ko'paytirib ${randomSon * 2} sonini chiqardik \n va 2ga bo'lib ${randomSon / 2} sonini chiqardik\n va shu sonni 3ga bo'lingandagi qoldiq ${randomSon / 3} sonini chiqardik`)
}