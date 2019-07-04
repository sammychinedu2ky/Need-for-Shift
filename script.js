window.onload=()=>{
    var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems,{
                
                onOpenEnd:function(){
                    let word = document.querySelector('#word').value;
    let moves = document.querySelector('#moves').value;
                    let progress = document.querySelector('#progress')
                    let img = document.querySelector("#modalpic");
                    let reply=document.querySelector('#reply')
                    //alert(img)
                    solve(word,moves).then(result=>{
                        
                
                         setTimeout(() =>{
                             img.src="https://media.giphy.com/media/5z0cCCGooBQUtejM4v/giphy-downsized.gif"
                            // progress.style.visibility="hidden";
                            progress.classList.add('fade')
                             reply.innerHTML= "<h5>The encryption gives " + "<span id='red' >" + result.toUpperCase() + "</span>" +"</h5>"
                         } , 3000)
                    })
                },
                onCloseEnd: function(){
                        let word = document.querySelector('#word');
    let moves = document.querySelector('#moves');
                    let progress = document.querySelector('#progress')
                    let img = document.querySelector("#modalpic");
                    let reply=document.querySelector('#reply')
                    img.src='https://media.giphy.com/media/3orieUe6ejxSFxYCXe/giphy.gif';
                    reply.innerHTML='Waiting for server to reply';
                    progress.classList.remove('fade');
                    //word.value='';
                   // moves.value=''
                }
                
            });
                
        async function solve(letter,revolution){
                        
                        
                        
        let arr = 'abcdefghijklmnopqrstuvwxyz';
        let out = '';
        letter.toLowerCase().split("").forEach(item=>{
            if(arr.search(item.toLowerCase())!==-1){
                
                if(arr.indexOf(item)-revolution%26>=0){
                    out+=arr[arr.indexOf(item)-revolution%26]
                    
                }
                if(arr.indexOf(item)-revolution%26<0){
                    out+=arr[26-(26-revolution%26-arr.indexOf(item))]
                }
                
            }
            else{
                out+=item
            }
        })
        return out
    }
    let btn = document.querySelector('btn')
    }
    