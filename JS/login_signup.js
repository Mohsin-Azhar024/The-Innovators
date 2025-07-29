
    var menuModal = document.getElementById("menuModal");
    var loginModal = document.getElementById("loginModal");
    var signupModal = document.getElementById("signupModal");  
    var closeBtns = document.getElementsByClassName("close");
    
    document.getElementById("loginsignup").onclick = function() {
      menuModal.style.display = "block";
    };
    
    document.getElementById("loginBtn").onclick = function() {
      loginModal.style.display = "block";
    };
    
    document.getElementById("signupBtn").onclick = function() {
      signupModal.style.display = "block";
    };
    
    for (var i = 0; i < closeBtns.length; i++) {
      closeBtns[i].onclick = function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
      };
    }
    
    window.onclick = function(event) {
      if (event.target === menuModal) {
        menuModal.style.display = "none";
      } else if (event.target === loginModal) {
        loginModal.style.display = "none";
      } else if (event.target === signupModal) {
        signupModal.style.display = "none";
      }
    };