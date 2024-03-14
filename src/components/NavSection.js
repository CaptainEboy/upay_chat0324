import upaychat from '../assets/upaychat.png';

const NavSection = () => {

  return (
    <nav style={{backgroundColor: "white", marginBottom: 80}} class="nav navbar navbar-expand-md navbar-light fixed-top">
        <div class="header container-fluid">
            <a href="/" class="brand navbar-brand"><img alt="" src={upaychat} 
                width="40" height="40" class="d-inline-block" /> UpayChat</a>
            <button aria-controls="" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
            <div class="navbar-collapse collapse" id="responsive-navbar-nav">
                <div class="mx-auto navbar-nav">
                    <div class="nav-item dropdown"><a id="collasible-nav-dropdown" aria-expanded="false" role="button" class="dropdown-toggle nav-link" tabindex="0">Send &amp; Receive</a></div>
                    <div class="nav-item dropdown"><a id="collasible-nav-dropdown" aria-expanded="false" role="button" class="dropdown-toggle nav-link" tabindex="0">Buy Airtime &amp; Data</a></div>
                    <div class="nav-item dropdown"><a id="collasible-nav-dropdown" aria-expanded="false" role="button" class="dropdown-toggle nav-link" tabindex="0">Pay Bills</a></div>
                </div>
                <div class="navbar-nav"><a href="login" data-rr-ui-event-key="login" class="nav-link">Log in</a><a href="register" data-rr-ui-event-key="register" class="nav-link"> Register </a></div>
            </div>
        </div>
    </nav>
  );
};

export default NavSection;