function now(){
    for (let i = 1; i < 7; i++) {
      let div = document.getElementById("stage"+i)
      let time = new Date()
      switch(i){
        case 1:
          time.setMinutes(time.getMinutes()+105+14)
          break
        case 2:
          time.setMinutes(time.getMinutes()+195+14)
          break
        case 3:
          time.setMinutes(time.getMinutes()+285+14)
          break
        case 4:
          time.setMinutes(time.getMinutes()+375+14)
          break
        case 5:
          time.setMinutes(time.getMinutes()+465+14)
          break
        case 6:
          time.setMinutes(time.getMinutes()+555)
          break
        
     }
      div.innerHTML = time.getHours() + ':' + time.getMinutes()
    }
    console.log(noww)
}

function on(date){  
  for (let i = 1; i < 7; i++) {
    let time = new Date()
    let [hours, minutes] = date.split(':');

    time.setHours(+hours); // Set the hours, using implicit type coercion
    time.setMinutes(minutes); // You can pass Number or String. It doesn't really matter

    let div = document.getElementById("stage"+i)
      switch(i){
        case 1:
          time.setMinutes(time.getMinutes()-105-14)
          break
        case 2:
          time.setMinutes(time.getMinutes()-195-14)
          break
        case 3:
          time.setMinutes(time.getMinutes()-285-14)
          break
        case 4:
          time.setMinutes(time.getMinutes()-375-14)
          break
        case 5:
          time.setMinutes(time.getMinutes()-465-14)
          break
        case 6:
          time.setMinutes(time.getMinutes()-555-14)
          break  
     }
     div.innerHTML = time.getHours() + ':' + time.getMinutes()
    }
}

window.onload = function() {

  new Rolldate({

    el:'#times',
    format: 'hh:mm',
    confirm: function(date){
      on(date)
    },
    lang: { 
      title: 'Выберите время', 
      cancel: 'Отмена', 
      confirm: 'Применить', 
      hour: '', 
      min: ''
    }

  })
}