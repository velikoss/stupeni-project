function on(date){  
    for (let i = 4; i < 7; i++) {
      let time = new Date()
      let [hours, minutes] = date.split(':');
  
      time.setHours(+hours); // Set the hours, using implicit type coercion
      time.setMinutes(minutes); // You can pass Number or String. It doesn't really matter
  
      let div = document.getElementById("stage"+i)
        switch(i){
          case 4:
            time.setMinutes(time.getMinutes()-375-15)
            break
          case 5:
            time.setMinutes(time.getMinutes()-465-15)
            break
          case 6:
            time.setMinutes(time.getMinutes()-555-15)
            break  
       }
       div.innerHTML = String(time.getHours().toString().length<2?"0"+time.getHours():time.getHours()) + ':' + String(time.getMinutes().toString().length<2?"0"+time.getMinutes():time.getMinutes())
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
