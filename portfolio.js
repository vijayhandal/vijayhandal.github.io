/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById( toggleId ),
      nav = document.getElementById( navId );
  
    if ( toggle && nav ) {
      toggle.addEventListener( "click", () => {
        nav.classList.toggle( "show" );
      } );
    }
  };
  showMenu( "nav-toggle", "nav-menu" );
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll( ".nav-link" );
  const sections = document.querySelectorAll( ".section" );
  
  window.addEventListener( "scroll", () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if ( scrollY >= sectionTop - 390 ) {
        current = section.getAttribute( 'id' );
      }
    } )
  
    navLinks.forEach( link => {
      link.classList.remove( 'active' );
      if ( link.classList.contains( current ) ) {
        link.classList.add( 'active' );
      }
    } )
  } )
  

  
  //   /*Remove menu mobile*/
  const navMenu = document.getElementById( "nav-menu" );
  //   navMenu.classList.remove("show");
  // }
  navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );
  
  /*===== COPY Email =====*/
  const copy = document.getElementById( "copy" );
  copy.addEventListener( "click", () => {
    navigator.clipboard.writeText( "handalvijay9588@gmail.com" );
    copy.innerHTML = "copied";
    setTimeout( () => {
      copy.innerHTML = null;
    }, 1000 );
  } );
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal( {
    origin: "top",
    distance: "80px",
    duration: 100,
    reset: true,
  } );
  
  /*SCROLL HOME*/
  sr.reveal( ".home-title", {} );
  // sr.reveal( ".button", {delay:100} );
  sr.reveal( ".home-img", { delay: 400 } );
  sr.reveal( ".home-social-icon", { interval: 200 } );
  
  /*SCROLL ABOUT*/
  sr.reveal( ".about-img", {} );
  sr.reveal( ".about-subtitle", { delay: 400 } );
  sr.reveal( ".about-text", { delay: 400 } );
  
  /*SCROLL SKILLS*/
  sr.reveal( ".skills-subtitle", {} );
  sr.reveal( ".skills-text", {} );
  sr.reveal( ".skills-data", { interval: 100 } );

  // sr.reveal( ".project-img", { interval: 100 } );
  

document.getElementById("resume").addEventListener("click",function() {
window.open("https://drive.google.com/file/d/1an8ujiJPzdpQHGna9S7vLBWmv_JZQvbF/view?usp=sharing","_blank");
});

document.getElementById("resume1").addEventListener("click",function() {
  window.open("https://drive.google.com/file/d/1an8ujiJPzdpQHGna9S7vLBWmv_JZQvbF/view?usp=sharing","_blank");
  });

  

  function sendEmail(){
    console.log(document.getElementById("name1").value=='');
    if(document.getElementById("name1").value==''){
      console.log(document.getElementById("name").value);
      alert("Name should not be empty..!!");
    }else if(document.getElementById("email").value==''){
      console.log(document.getElementById("email").value);
      alert("Email should not be empty..!!");
    }else if(document.getElementById("message").value==''){
      console.log(document.getElementById("message").value);
      alert("Message should not be empty..!!");
    }else{
    var params = {
      name:document.getElementById("name1").value,
      email:document.getElementById("email").value,
      message:"Message: "+document.getElementById("message").value
    }
  
  
  const serviceID = "service_2vxdicv";
  const templateID = "template_t6ue2qb";
  // console.log("Name: - "+params.name);
  emailjs.send(serviceID,templateID,params)
  .then(
    res=>{
      document.getElementById("name1").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      console.log(res)
      alert("email send successfully..")
    }
  ).catch(err=>{console.log(err)});
  console.log(params);
  }
  }