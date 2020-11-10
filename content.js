
const interval = setInterval(()=>{
  const header = document.querySelector('._1QUKR');

  if(header){
    console.log(header);
    clearInterval(interval);

    const selectTag = document.createElement("select")
    selectTag.classList.add("timesSelect");

    header.appendChild(selectTag)


    var optionTag1 = document.createElement("option")
    optionTag1.value = 1
    optionTag1.text = "1.0x"
    optionTag1.classList.add("optionTag");

    selectTag.appendChild(optionTag1)

    var optionTag2 = document.createElement("option")
    optionTag2.value = 1.5
    optionTag2.text = "1.5x"
    optionTag2.classList.add("optionTag");

    selectTag.appendChild(optionTag2)

    var optionTag3 = document.createElement("option")
    optionTag3.value = 2
    optionTag3.text = "2.0x"
    optionTag3.classList.add("optionTag");

    selectTag.appendChild(optionTag3)
    
    
    selectTag.addEventListener("change", ()=>{
      const audios = document.querySelectorAll("audio");
        audios.forEach((audio)=>{
          audio.playbackRate = selectTag.value;
      })
    })
  }
}, 1000)