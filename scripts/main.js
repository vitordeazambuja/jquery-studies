$(document).ready(()=>{

    $('.menu-container').hide();

    $('.menu-btn').on('click', ()=>{
        $('.menu-container').slideToggle();
    }).on('mouseenter', ()=>{
        $('.menu-btn').css({
            color:'#FCFAF9'
        });
    }).on('mouseleave', ()=>{
        $('.menu-btn').css({
            color:'#48E5C2'
        });
    });

    $('.buy-btn').on('mouseenter',event=>{
        $(event.currentTarget).css({
            color:'#FCFAF9'
        })
    }).on('mouseleave',event=>{
        $(event.currentTarget).css({
            color:'#48E5C2'
        })
    });

    $('.contactus').on('mouseenter', ()=>{
        $('.contactus').css({
            color:'#48E5C2'
        });
    }).on('mouseleave', ()=>{
        $('.contactus').css({
            color:'#FCFAF9'
        })
    });
});