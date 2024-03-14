const FooterSection= () => {

  return (
    <div style={{marginTop: 100}} class="container">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-2">
            <div class="list-group">
                <div style={{color: "rgb(78, 229, 74)", fontSize: 16}} class="list-group-item">Company</div>
                <div class="list-group-item"><a href="/about">About Us</a></div>
                <div class="list-group-item"><a href="/jobs">Jobs</a></div>
                <div class="list-group-item"><a href="/blogs">Blog</a></div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="list-group">
                <div style={{color: "rgb(78, 229, 74)", fontSize: 16}} class="list-group-item">Help</div>
                <div class="list-group-item"><a href="/faqs">FAQs</a></div>
                <div class="list-group-item"><a href="/contact">Contact Us</a></div>
                <div class="list-group-item"><a href="/fees">Pricing</a></div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="list-group">
                <div style={{color: "rgb(78, 229, 74)", fontSize: 16}} class="list-group-item">Legal</div>
                <div class="list-group-item"><a href="/term">Terms of Use</a></div>
                <div class="list-group-item"><a href="/policy">Privacy Policy</a></div>
            </div>
        </div>
        <div class="badge col-md-2">
            <div>
                <a href="https://play.google.com/store/apps/details?id=com.upaychat.finance" title="UpayChatFooter" class="store-badge-google-play">
                <img src="data:image/svg+xml,%3csvg width='180' height='54' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M173.333 54H6.667C3 54 0 50.962 0 47.25V6.75C0 3.038 3 0 6.667 0h166.666C177 0 180 3.038 180 6.75v40.5c0 3.712-3 6.75-6.667 6.75z' fill='black'/%3e%3cpath d='M173.333 0H6.667C3 0 0 3.038 0 6.75v40.5C0 50.962 3 54 6.667 54h166.666C177 54 180 50.962 180 47.25V6.75c0-3.712-3-6.75-6.667-6.75zm0 1.08c3.088 0 5.6 2.544 5.6 5.67v40.5c0 3.127-2.512 5.67-5.6 5.67H6.667c-3.088 0-5.6-2.543-5.6-5.67V6.75c0-3.126 2.512-5.67 5.6-5.67h166.666z' fill='%23A6A6A6'/%3e%3cpath d='M63.225 13.829c0 1.13-.331 2.031-.994 2.703-.752.8-1.733 1.199-2.939 1.199-1.154 0-2.136-.405-2.944-1.216-.808-.81-1.212-1.816-1.212-3.015 0-1.2.404-2.204 1.212-3.015.808-.81 1.79-1.216 2.944-1.216.573 0 1.122.113 1.642.34.521.226.939.527 1.252.904l-.704.713c-.53-.641-1.258-.961-2.19-.961-.842 0-1.57.3-2.185.899-.614.6-.922 1.378-.922 2.336s.308 1.736.922 2.336c.615.6 1.343.9 2.185.9.893 0 1.638-.302 2.235-.905.387-.393.61-.94.67-1.64h-2.905v-.974h3.877c.037.212.056.415.056.612' fill='white'/%3e%3cpath d='M63.225 13.829h-.134c0 1.105-.32 1.963-.954 2.608h-.002v.002c-.729.771-1.665 1.155-2.843 1.157-1.124-.002-2.064-.39-2.85-1.177-.784-.788-1.171-1.75-1.173-2.919.002-1.17.39-2.13 1.173-2.919.786-.787 1.726-1.176 2.85-1.177.556 0 1.085.11 1.59.328.505.22.904.51 1.201.868l.102-.087-.094-.095-.703.713.094.095.103-.087c-.554-.672-1.332-1.011-2.293-1.01-.873 0-1.642.316-2.277.938-.642.624-.964 1.446-.963 2.433 0 .987.322 1.809.963 2.433.636.622 1.404.938 2.277.937.923.002 1.71-.315 2.329-.944.413-.42.648-1.001.71-1.724l.012-.147h-2.918v-.703h3.744v-.135l-.131.024c.036.205.053.4.053.588h.267a3.61 3.61 0 00-.058-.636l-.02-.11H59.16v1.242h3.038v-.135l-.132-.011c-.06.679-.273 1.19-.633 1.556-.573.578-1.276.864-2.14.865-.81 0-1.499-.284-2.092-.86-.587-.576-.88-1.31-.881-2.24.001-.93.294-1.664.881-2.24.593-.576 1.281-.86 2.092-.86.902.002 1.582.303 2.088.913l.094.112.806-.816.086-.088-.078-.094c-.328-.396-.764-.71-1.301-.943a4.213 4.213 0 00-1.695-.35c-1.185-.001-2.208.42-3.038 1.255-.833.833-1.252 1.88-1.251 3.111-.001 1.23.418 2.278 1.252 3.111.829.835 1.852 1.256 3.037 1.255 1.234.001 2.258-.414 3.036-1.24l-.097-.094.094.096c.691-.699 1.034-1.643 1.033-2.8h-.133zM69.37 10.445h-3.643v2.568h3.285v.974h-3.285v2.568h3.643v.995H64.7v-8.1h4.67v.995z' fill='white'/%3e%3cpath d='M69.37 10.445v-.135h-3.776v2.838h3.285v.703h-3.285v2.839h3.643v.725h-4.404v-7.83h4.404v.86h.133v-.135.135h.134v-1.13h-4.937v8.37h4.937V16.42H65.86v-2.298h3.286v-1.244H65.86V10.58h3.644v-.135h-.134M73.705 17.55h-1.028v-7.105h-2.235V9.45h5.498v.995h-2.235v7.105z' fill='white'/%3e%3cpath d='M73.705 17.55v-.135h-.895V10.31h-2.234v-.725h5.23v.725h-2.234v7.24h.133v-.135.135h.134v-6.97h2.234V9.315h-5.764v1.265h2.234v7.105H73.84v-.135h-.134M79.917 17.55v-8.1h1.028v8.1h-1.028z' fill='white'/%3e%3cpath d='M79.917 17.55h.133V9.585h.761v7.83h-.894v.135h.133-.133v.135h1.161v-8.37h-1.294v8.37h.133v-.135zM85.505 17.55h-1.029v-7.105h-2.234V9.45h5.497v.995h-2.234v7.105z' fill='white'/%3e%3cpath d='M85.505 17.55v-.135h-.896V10.31h-2.234v-.725h5.23v.725h-2.234v7.24h.134v-.135.135h.133v-6.97h2.234V9.315h-5.764v1.265h2.235v7.105h1.295v-.135h-.133M93.04 15.825c.591.607 1.316.91 2.173.91.856 0 1.581-.303 2.172-.91.593-.607.89-1.383.89-2.325 0-.942-.297-1.718-.89-2.325-.59-.607-1.316-.91-2.172-.91-.857 0-1.582.303-2.174.91-.591.607-.888 1.383-.888 2.325 0 .942.297 1.718.888 2.325zm5.106.678c-.787.82-1.765 1.228-2.933 1.228-1.17 0-2.148-.409-2.933-1.228-.787-.818-1.178-1.819-1.178-3.003 0-1.184.391-2.185 1.178-3.003.785-.82 1.763-1.228 2.933-1.228 1.162 0 2.138.41 2.928 1.233.789.822 1.184 1.821 1.184 2.998 0 1.184-.394 2.185-1.18 3.003z' fill='white'/%3e%3cpath d='M93.04 15.825l-.096.095c.614.631 1.38.952 2.269.95a3.051 3.051 0 002.267-.95c.618-.632.93-1.45.928-2.42.001-.97-.31-1.788-.928-2.42a3.051 3.051 0 00-2.267-.95 3.053 3.053 0 00-2.269.95c-.616.632-.928 1.45-.926 2.42-.002.97.31 1.788.926 2.42l.095-.095.095-.095c-.566-.583-.849-1.316-.85-2.23.001-.914.284-1.647.85-2.23.57-.583 1.252-.869 2.079-.87.825.001 1.508.287 2.078.87.566.583.85 1.316.85 2.23 0 .914-.284 1.647-.85 2.23-.57.583-1.253.869-2.078.87-.827-.001-1.508-.287-2.08-.87l-.094.095zm5.106.678l-.096-.094c-.764.794-1.699 1.185-2.837 1.187-1.14-.002-2.075-.393-2.837-1.187l-.004-.004.004.004c-.764-.795-1.14-1.755-1.141-2.909.001-1.154.377-2.114 1.14-2.91.763-.792 1.698-1.185 2.838-1.186 1.13.001 2.064.395 2.832 1.193.766.799 1.145 1.757 1.146 2.903-.001 1.154-.379 2.114-1.14 2.91l.095.093.096.094c.808-.84 1.217-1.883 1.216-3.097 0-1.207-.41-2.247-1.222-3.092-.812-.847-1.83-1.276-3.023-1.274-1.2-.002-2.221.425-3.029 1.269-.81.84-1.217 1.883-1.216 3.097 0 1.214.406 2.257 1.216 3.098l.004.003-.004-.004c.808.844 1.829 1.27 3.029 1.269 1.199.001 2.22-.425 3.029-1.269l-.096-.094M100.767 17.55v-8.1h1.251l3.888 6.301h.045l-.045-1.56V9.45h1.029v8.1h-1.073l-4.068-6.607h-.044l.044 1.562v5.045h-1.027z' fill='white'/%3e%3cpath d='M100.767 17.55h.134V9.585h1.043l3.888 6.301h.256l-.048-1.698V9.585h.762v7.83h-.866l-4.068-6.607h-.255l.048 1.7v4.907h-.894v.135h.134-.134v.135h1.161v-5.182l-.045-1.563-.133.003v.135h.044v-.135l-.113.072 4.107 6.67h1.28v-8.37h-1.295v4.877l.044 1.563.134-.004v-.135h-.045v.135l.113-.071-3.927-6.365h-1.458v8.37h.133v-.135zM142.581 40.5h2.488V23.623h-2.488V40.5zm22.41-10.797l-2.852 7.317h-.086l-2.96-7.317h-2.68l4.439 10.226-2.531 5.689h2.596l6.84-15.915h-2.766zm-14.11 8.88c-.816 0-1.952-.412-1.952-1.433 0-1.303 1.416-1.802 2.638-1.802 1.094 0 1.608.239 2.273.565-.193 1.563-1.523 2.67-2.959 2.67zm.3-9.25c-1.801 0-3.666.804-4.438 2.585l2.208.933c.472-.933 1.35-1.238 2.273-1.238 1.287 0 2.595.782 2.616 2.172v.173c-.451-.26-1.415-.65-2.595-.65-2.38 0-4.804 1.323-4.804 3.798 0 2.259 1.952 3.713 4.139 3.713 1.673 0 2.595-.76 3.175-1.65h.085v1.303h2.401v-6.47c0-2.996-2.208-4.669-5.06-4.669zm-15.376 2.424h-3.538v-5.785h3.538c1.86 0 2.916 1.56 2.916 2.893 0 1.308-1.056 2.892-2.916 2.892zm-.064-8.134h-5.961V40.5h2.487v-6.394h3.474c2.758 0 5.468-2.021 5.468-5.241 0-3.22-2.71-5.242-5.468-5.242zm-32.508 14.963c-1.718 0-3.158-1.457-3.158-3.458 0-2.022 1.44-3.502 3.158-3.502 1.697 0 3.029 1.48 3.029 3.502 0 2.001-1.332 3.458-3.029 3.458zm2.857-7.938h-.086c-.558-.674-1.633-1.283-2.986-1.283-2.835 0-5.434 2.522-5.434 5.763 0 3.219 2.599 5.72 5.434 5.72 1.353 0 2.428-.61 2.986-1.305h.086v.827c0 2.197-1.16 3.371-3.029 3.371-1.525 0-2.47-1.11-2.857-2.044l-2.17.913c.624 1.522 2.278 3.393 5.027 3.393 2.922 0 5.392-1.74 5.392-5.981v-10.31h-2.363v.936zm4.081 9.852h2.492V23.623h-2.492V40.5zm6.165-5.568c-.064-2.218 1.697-3.349 2.965-3.349.988 0 1.826.5 2.104 1.218l-5.069 2.131zm7.733-1.913c-.472-1.284-1.912-3.654-4.854-3.654-2.922 0-5.349 2.327-5.349 5.741 0 3.22 2.406 5.742 5.628 5.742 2.599 0 4.103-1.61 4.726-2.544l-1.933-1.306c-.644.958-1.526 1.588-2.793 1.588-1.267 0-2.169-.587-2.75-1.74l7.583-3.175-.258-.652zm-60.41-1.893v2.436h5.756c-.172 1.37-.623 2.37-1.31 3.067-.838.848-2.148 1.783-4.447 1.783-3.544 0-6.315-2.892-6.315-6.48 0-3.59 2.771-6.482 6.315-6.482 1.912 0 3.308.761 4.34 1.74l1.696-1.718c-1.439-1.393-3.35-2.458-6.036-2.458-4.854 0-8.936 4.002-8.936 8.917s4.082 8.917 8.936 8.917c2.621 0 4.597-.87 6.144-2.501 1.59-1.61 2.083-3.871 2.083-5.698a8 8 0 00-.129-1.523h-8.098zm14.771 7.46c-1.719 0-3.2-1.435-3.2-3.48 0-2.066 1.481-3.48 3.2-3.48 1.718 0 3.2 1.414 3.2 3.48 0 2.045-1.482 3.48-3.2 3.48zm0-9.221c-3.136 0-5.693 2.414-5.693 5.741 0 3.306 2.557 5.742 5.693 5.742 3.136 0 5.692-2.436 5.692-5.742 0-3.327-2.556-5.741-5.692-5.741zm12.418 9.221c-1.718 0-3.2-1.435-3.2-3.48 0-2.066 1.482-3.48 3.2-3.48 1.718 0 3.2 1.414 3.2 3.48 0 2.045-1.482 3.48-3.2 3.48zm0-9.221c-3.136 0-5.692 2.414-5.692 5.741 0 3.306 2.555 5.742 5.692 5.742 3.136 0 5.692-2.436 5.692-5.742 0-3.327-2.556-5.741-5.692-5.741z' fill='white'/%3e%3cpath d='M14.013 43.726l-.099-.096c-.388-.416-.617-1.061-.617-1.897v.197-29.857-.007V12.271c0-.905.267-1.587.714-1.996l16.52 16.726-16.518 16.725zm-.716-31.661zm.006-.221v-.003.003zm0-.01v-.002.002z' fill='url(%23paint0_linear)'/%3e%3cpath d='M36.037 32.776l.126-.072 6.523-3.753c.622-.358 1.037-.792 1.244-1.252-.206.46-.621.894-1.244 1.252l-6.523 3.753-.126.072zm.002-.198l-5.508-5.577 5.507-5.576 6.648 3.824c.845.486 1.319 1.112 1.398 1.752v.002c-.08.638-.553 1.265-1.398 1.75l-6.648 3.825' fill='url(%23paint1_linear)'/%3e%3cpath d='M15.19 44.363a1.706 1.706 0 00.001 0zm.001-.198c-.461 0-.864-.152-1.178-.439L30.531 27l5.508 5.577-19.354 11.134c-.535.307-1.043.453-1.494.453zm-1.183-.245a1.907 1.907 0 01-.086-.084l.086.084z' fill='url(%23paint2_linear)'/%3e%3cpath d='M30.531 27.001l-16.52-16.726a1.704 1.704 0 011.178-.438c.452 0 .96.146 1.496.454l19.353 11.134L30.531 27zm5.632-5.702L16.684 10.094c-.537-.308-1.044-.454-1.496-.454h-.006.008c.45 0 .958.145 1.494.453L36.163 21.3z' fill='url(%23paint3_linear)'/%3e%3cpath d='M15.314 44.36c.419-.025.883-.17 1.37-.45l19.353-11.134-19.352 11.133c-.488.28-.952.426-1.371.45zm-1.302-.436l-.004-.004a.039.039 0 01.005.004zm-.09-.088l-.008-.009.008.009z' fill='black'/%3e%3cpath d='M36.037 32.776l.126-.072-.126.072z' fill='url(%23paint4_linear)'/%3e%3cpath d='M15.192 44.363c-.462 0-.865-.153-1.179-.44v.001a.025.025 0 00-.005-.004l-.086-.084-.008-.01.1-.1c.313.287.716.44 1.177.439.451 0 .958-.145 1.494-.453l19.354-11.134.123.126-.125.072-19.352 11.133c-.488.28-.952.426-1.371.45a2.518 2.518 0 01-.122.004' fill='url(%23paint5_linear)'/%3e%3cpath d='M13.914 43.827c-.388-.416-.617-1.061-.617-1.897 0 .836.229 1.48.617 1.897' fill='black'/%3e%3cpath d='M13.914 43.827c-.388-.416-.617-1.061-.617-1.897v-.197c0 .836.229 1.481.617 1.897l.1.096-.1.1' fill='url(%23paint6_linear)'/%3e%3cpath d='M13.914 43.827l.1-.101-.1.1' fill='url(%23paint7_linear)'/%3e%3cpath d='M43.93 27.7a1.692 1.692 0 010 0z' fill='black'/%3e%3cpath d='M36.163 32.704l-.124-.126 6.647-3.825c.845-.485 1.319-1.112 1.398-1.75 0 .234-.052.468-.154.696-.207.46-.622.894-1.244 1.252l-6.523 3.753z' fill='url(%23paint8_linear)'/%3e%3cpath d='M44.084 27.001c0-.707-.467-1.413-1.398-1.949L36.163 21.3h-.001l6.524 3.753c.932.536 1.399 1.243 1.398 1.95z' fill='%23404040'/%3e%3cpath d='M44.084 27c-.08-.64-.553-1.265-1.398-1.75l-6.648-3.825.124-.126 6.524 3.753c.931.536 1.397 1.242 1.398 1.949z' fill='url(%23paint9_linear)'/%3e%3cpath d='M13.297 12.066v-.001.001zm.006-.22v-.002.003zm0-.005v-.007.007zm0-.008c.077-1.387.822-2.188 1.876-2.193a1.703 1.703 0 00-1.167.439v-.001l-.003.004c-.033.03-.064.061-.095.094-.35.375-.57.937-.61 1.656z' fill='%23404040'/%3e%3cpath d='M13.297 12.27v-.196-.008-.001c0-.075.002-.148.006-.218v-.003-.003-.007-.002c.04-.72.261-1.28.611-1.656l.098.1c-.448.408-.715 1.09-.715 1.995zm.712-2.188l.003-.004c0 .002-.002.003-.003.004z' fill='url(%23paint10_linear)'/%3e%3cpath d='M36.038 21.425L16.685 10.29c-.537-.308-1.044-.454-1.496-.454-.461 0-.864.152-1.178.438l-.097-.099c.03-.033.062-.064.095-.094l.003-.003c.312-.285.71-.436 1.167-.44H15.188c.453 0 .96.147 1.497.455l19.478 11.205h-.001l-.124.126z' fill='url(%23paint11_linear)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='29.066' y1='11.758' x2='6.412' y2='34.133' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='.007' stop-color='%2300A1FF'/%3e%3cstop offset='.26' stop-color='%2300BEFF'/%3e%3cstop offset='.512' stop-color='%2300D2FF'/%3e%3cstop offset='.76' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='45.112' y1='27.002' x2='12.85' y2='27.002' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='.409' stop-color='%23FFBD00'/%3e%3cstop offset='.775' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='33.103' y1='30.1' x2='2.381' y2='60.442' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='9.73' y1='.238' x2='23.448' y2='13.787' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='.069' stop-color='%232DA771'/%3e%3cstop offset='.476' stop-color='%2315CF74'/%3e%3cstop offset='.801' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear' x1='45.112' y1='27.002' x2='12.85' y2='27.002' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CCB300'/%3e%3cstop offset='.409' stop-color='%23CC9700'/%3e%3cstop offset='.775' stop-color='%23CC8400'/%3e%3cstop offset='1' stop-color='%23CC7D00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear' x1='33.103' y1='30.1' x2='2.381' y2='60.442' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear' x1='29.066' y1='11.758' x2='6.412' y2='34.133' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='.007' stop-color='%23008DE0'/%3e%3cstop offset='.26' stop-color='%2300A7E0'/%3e%3cstop offset='.512' stop-color='%2300B8E0'/%3e%3cstop offset='.76' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear' x1='33.103' y1='30.1' x2='2.382' y2='60.442' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0333C'/%3e%3cstop offset='1' stop-color='%23AB0F56'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear' x1='45.113' y1='27.002' x2='12.85' y2='27.002' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='.409' stop-color='%23E0A600'/%3e%3cstop offset='.775' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear' x1='45.113' y1='27.002' x2='12.85' y2='27.002' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='.409' stop-color='%23FFCE40'/%3e%3cstop offset='.775' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint10_linear' x1='29.066' y1='11.758' x2='6.412' y2='34.133' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='.007' stop-color='%2340B9FF'/%3e%3cstop offset='.26' stop-color='%2340CEFF'/%3e%3cstop offset='.512' stop-color='%2340DDFF'/%3e%3cstop offset='.76' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint11_linear' x1='9.73' y1='.238' x2='23.448' y2='13.787' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='.069' stop-color='%2362BD95'/%3e%3cstop offset='.476' stop-color='%2350DB97'/%3e%3cstop offset='.801' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Get it on Google Play" />
                </a>
            </div>
            <div>
                <a href="https://apps.apple.com/app/upaychat/id1548246385" title="UpayChatFooter" class="store-badge-app-store">
                <img src="data:image/svg+xml,%3csvg width='161' height='54' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M147.263 0H12.749c-.49 0-.975 0-1.464.003-.409.002-.815.01-1.228.017-.89.022-1.791.078-2.68.238a8.608 8.608 0 00-4.706 2.437 8.45 8.45 0 00-1.575 2.19A8.952 8.952 0 00.26 7.453C.1 8.348.043 9.252.02 10.157c-.012.414-.013.83-.02 1.243V42.604c.007.42.008.825.02 1.245.023.904.079 1.808.24 2.702.156.905.42 1.753.836 2.571a8.38 8.38 0 001.575 2.18 8.388 8.388 0 002.165 1.59 8.9 8.9 0 002.541.852c.889.161 1.79.214 2.68.239.413.01.82.014 1.228.014.49.003.974.003 1.464.003h134.514c.482 0 .969 0 1.449-.003.409 0 .826-.005 1.234-.014.896-.025 1.795-.078 2.674-.239a9.053 9.053 0 002.552-.851 8.452 8.452 0 002.163-1.591 8.666 8.666 0 001.578-2.18c.41-.818.678-1.666.828-2.57.165-.895.216-1.799.25-2.703.004-.42.004-.826.004-1.245.01-.49.01-.978.01-1.477V12.873c0-.494 0-.984-.01-1.473 0-.414 0-.83-.004-1.243-.034-.905-.085-1.81-.25-2.703a8.956 8.956 0 00-.828-2.57 8.676 8.676 0 00-3.741-3.78 8.993 8.993 0 00-2.552-.846c-.879-.16-1.778-.216-2.674-.238-.408-.007-.825-.015-1.234-.017-.48-.003-.967-.003-1.449-.003z' fill='%23B2B1B1'/%3e%3cpath d='M11.292 52.819c-.408 0-.805-.006-1.21-.015-.747-.021-1.634-.063-2.499-.22a7.818 7.818 0 01-2.215-.74A7.236 7.236 0 013.5 50.472a7.18 7.18 0 01-1.364-1.885 7.763 7.763 0 01-.726-2.238c-.164-.908-.206-1.83-.223-2.531-.009-.284-.02-1.232-.02-1.232V11.4s.012-.934.02-1.208c.017-.707.06-1.628.221-2.527.143-.828.38-1.56.727-2.244a7.25 7.25 0 011.357-1.887 7.447 7.447 0 011.875-1.38 7.732 7.732 0 012.211-.735c.9-.163 1.813-.203 2.508-.221l1.206-.017h137.413l1.221.017c.686.018 1.599.058 2.486.22a7.883 7.883 0 012.234.74 7.384 7.384 0 011.86 1.37 7.442 7.442 0 011.369 1.896c.345.69.579 1.421.717 2.226.154.852.202 1.727.231 2.548.004.383.004.793.004 1.202.012.506.012.988.012 1.473v28.255c0 .49 0 .968-.012 1.45 0 .44 0 .842-.005 1.256-.028.795-.076 1.67-.229 2.502a7.811 7.811 0 01-.722 2.255 7.362 7.362 0 01-1.357 1.87 7.286 7.286 0 01-1.871 1.381 7.82 7.82 0 01-2.231.742c-.856.157-1.742.199-2.499.22-.391.01-.803.015-1.201.015l-1.449.002-135.971-.002z' fill='%23040403'/%3e%3cpath d='M33.12 27.406c-.034-3.714 3.01-5.52 3.15-5.606-1.724-2.538-4.398-2.886-5.337-2.913-2.245-.237-4.421 1.357-5.566 1.357-1.166 0-2.928-1.333-4.825-1.293-2.442.038-4.727 1.466-5.98 3.683-2.586 4.52-.658 11.163 1.82 14.816 1.239 1.791 2.687 3.79 4.582 3.718 1.855-.077 2.548-1.194 4.787-1.194 2.218 0 2.867 1.194 4.801 1.15 1.99-.033 3.244-1.798 4.44-3.605 1.432-2.05 2.008-4.07 2.03-4.175-.046-.015-3.865-1.486-3.903-5.938zM29.466 16.485c.997-1.26 1.68-2.973 1.491-4.713-1.444.065-3.25 1.008-4.289 2.241-.92 1.085-1.742 2.865-1.53 4.537 1.622.123 3.288-.826 4.328-2.065zM50.89 34.547h5.016l-2.473-7.353h-.069l-2.474 7.353zm5.673 2.091h-6.329l-1.52 4.532h-2.68l5.994-16.765h2.786l5.994 16.765h-2.726l-1.519-4.532zM71.201 35.059c0-2.474-1.266-4.101-3.199-4.101-1.899 0-3.176 1.66-3.176 4.1 0 2.464 1.277 4.113 3.176 4.113 1.933 0 3.2-1.615 3.2-4.112zm2.554 0c0 3.798-2.013 6.238-5.052 6.238-1.725 0-3.095-.778-3.809-2.138h-.057v6.054h-2.485V28.948h2.405v2.032h.046c.69-1.312 2.163-2.16 3.855-2.16 3.072 0 5.097 2.451 5.097 6.239zM84.525 35.059c0-2.474-1.266-4.101-3.199-4.101-1.898 0-3.175 1.66-3.175 4.1 0 2.464 1.277 4.113 3.175 4.113 1.933 0 3.2-1.615 3.2-4.112zm2.554 0c0 3.798-2.013 6.238-5.052 6.238-1.724 0-3.094-.778-3.808-2.138h-.058v6.054h-2.485V28.948h2.405v2.032h.046c.69-1.312 2.164-2.16 3.855-2.16 3.072 0 5.097 2.451 5.097 6.239zM95.886 36.498c.184 1.663 1.783 2.755 3.97 2.755 2.094 0 3.601-1.092 3.601-2.591 0-1.3-.909-2.08-3.061-2.614l-2.152-.524c-3.05-.743-4.465-2.183-4.465-4.519 0-2.892 2.497-4.879 6.042-4.879 3.509 0 5.914 1.987 5.995 4.88h-2.508c-.151-1.674-1.52-2.684-3.522-2.684s-3.372 1.022-3.372 2.509c0 1.185.875 1.883 3.016 2.417l1.829.453c3.407.814 4.822 2.196 4.822 4.647 0 3.137-2.474 5.101-6.41 5.101-3.682 0-6.169-1.918-6.329-4.95h2.544zM111.444 26.055v2.893h2.302v1.986h-2.302v6.738c0 1.047.461 1.535 1.473 1.535.253 0 .657-.036.817-.059v1.975c-.275.07-.828.117-1.38.117-2.451 0-3.407-.93-3.407-3.3v-7.006h-1.76v-1.986h1.76v-2.893h2.497zM124.032 35.059c0-2.638-1.198-4.195-3.211-4.195-2.014 0-3.21 1.569-3.21 4.195 0 2.649 1.196 4.194 3.21 4.194 2.013 0 3.211-1.545 3.211-4.194zm-8.953 0c0-3.845 2.244-6.262 5.742-6.262 3.51 0 5.743 2.416 5.743 6.262 0 3.856-2.222 6.263-5.743 6.263-3.52 0-5.742-2.407-5.742-6.263zM128.612 28.948h2.371v2.08h.057c.38-1.383 1.484-2.209 2.911-2.209.358 0 .656.048.852.094v2.347c-.196-.082-.634-.152-1.116-.152-1.6 0-2.59 1.093-2.59 2.812v7.25h-2.485V28.947zM137.86 33.932h6.052c-.058-1.871-1.242-3.103-2.969-3.103-1.714 0-2.956 1.256-3.083 3.103zm8.4 3.648c-.335 2.219-2.474 3.742-5.212 3.742-3.522 0-5.709-2.383-5.709-6.205 0-3.833 2.199-6.32 5.604-6.32 3.35 0 5.456 2.323 5.456 6.029v.86h-8.551v.151c0 2.09 1.301 3.462 3.257 3.462 1.38 0 2.463-.662 2.796-1.72h2.359zM48.936 18.703h1.504c1.669 0 2.63-1.05 2.63-2.897 0-1.82-.977-2.88-2.63-2.88h-1.504v5.777zm1.642-6.916c2.366 0 3.755 1.468 3.755 4.002 0 2.574-1.378 4.053-3.755 4.053h-2.881v-8.055h2.881zM60.189 16.8c0-1.318-.586-2.088-1.615-2.088-1.033 0-1.614.77-1.614 2.087 0 1.329.58 2.094 1.614 2.094 1.029 0 1.615-.77 1.615-2.094zm-4.457 0c0-1.96 1.084-3.155 2.842-3.155 1.753 0 2.837 1.195 2.837 3.154 0 1.971-1.079 3.16-2.837 3.16-1.764 0-2.842-1.189-2.842-3.16zM68.96 19.842h-1.233l-1.244-4.477h-.094l-1.24 4.477h-1.22l-1.66-6.079h1.205l1.079 4.639h.089l1.237-4.639h1.14l1.238 4.639h.094l1.074-4.639h1.188l-1.653 6.079zM72.009 13.763h1.144v.966h.088c.293-.676.89-1.083 1.797-1.083 1.344 0 2.084.814 2.084 2.26v3.936h-1.188v-3.634c0-.977-.42-1.463-1.3-1.463-.878 0-1.437.592-1.437 1.541v3.556h-1.188v-6.079zM79.016 11.39h1.188v8.452h-1.188V11.39zM86.312 16.8c0-1.318-.586-2.088-1.615-2.088-1.033 0-1.614.77-1.614 2.087 0 1.329.581 2.094 1.614 2.094 1.029 0 1.615-.77 1.615-2.094zm-4.456 0c0-1.96 1.083-3.155 2.841-3.155 1.754 0 2.838 1.195 2.838 3.154 0 1.971-1.08 3.16-2.838 3.16-1.763 0-2.841-1.189-2.841-3.16zM92.656 17.603v-.508l-1.47.095c-.829.056-1.205.341-1.205.877 0 .547.47.865 1.116.865.896 0 1.56-.575 1.56-1.329zm-3.87.52c0-1.095.807-1.725 2.24-1.815l1.63-.095v-.525c0-.642-.42-1.004-1.232-1.004-.664 0-1.123.246-1.255.675h-1.15c.121-1.044 1.094-1.713 2.46-1.713 1.509 0 2.36.758 2.36 2.042v4.154h-1.144v-.854h-.094c-.358.608-1.016.954-1.808.954-1.16 0-2.007-.708-2.007-1.82zM96.628 16.8c0 1.289.603 2.065 1.61 2.065 1.001 0 1.62-.787 1.62-2.06 0-1.267-.626-2.065-1.62-2.065-1.001 0-1.61.781-1.61 2.06zm-1.227 0c0-1.921.978-3.138 2.5-3.138.824 0 1.52.396 1.846 1.067h.088V11.39h1.189v8.452h-1.139v-.96h-.094c-.359.664-1.061 1.06-1.89 1.06-1.532 0-2.5-1.216-2.5-3.142zM110.397 16.8c0-1.318-.586-2.088-1.615-2.088-1.034 0-1.614.77-1.614 2.087 0 1.329.58 2.094 1.614 2.094 1.029 0 1.615-.77 1.615-2.094zm-4.457 0c0-1.96 1.084-3.155 2.842-3.155 1.753 0 2.837 1.195 2.837 3.154 0 1.971-1.079 3.16-2.837 3.16-1.763 0-2.842-1.189-2.842-3.16zM113.213 13.763h1.144v.966h.089c.293-.676.891-1.083 1.797-1.083 1.343 0 2.084.814 2.084 2.26v3.936h-1.188v-3.634c0-.977-.421-1.463-1.3-1.463-.878 0-1.437.592-1.437 1.541v3.556h-1.189v-6.079zM125.041 12.25v1.54h1.304v1.012h-1.304v3.125c0 .637.26.916.852.916.182 0 .287-.012.452-.028v1a3.863 3.863 0 01-.646.06c-1.321 0-1.848-.469-1.848-1.641V14.8h-.955v-1.01h.955V12.25h1.19zM127.969 11.39h1.178v3.35h.094c.292-.681.928-1.09 1.836-1.09 1.282 0 2.073.821 2.073 2.267v3.925h-1.19v-3.629c0-.97-.447-1.463-1.287-1.463-.974 0-1.516.62-1.516 1.542v3.55h-1.188V11.39zM135.898 16.242h3.042c-.028-.955-.603-1.575-1.483-1.575-.878 0-1.492.625-1.559 1.575zm4.18 1.959c-.27 1.089-1.233 1.758-2.609 1.758-1.724 0-2.781-1.194-2.781-3.137s1.079-3.176 2.776-3.176c1.676 0 2.686 1.155 2.686 3.064v.419h-4.252v.067c.04 1.066.654 1.741 1.604 1.741.72 0 1.212-.262 1.433-.736h1.143z' fill='white'/%3e%3c/svg%3e"
                    alt="Download on the App Store" /></a>
            </div>
        </div>
        <div class="col-md-2">
            <div style={{display: "flex"}}>
                <a href="https://www.twitter.com/upaychat" class="social_link">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style={{width: 20, height: 20}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/upaychat/" class="social_link">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" style={{width: 20, height: 20}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                </a>
                <a href="#" class="social_link">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" style={{width: 20, height: 20}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div style={{textAlign: "center"}}>
    <img src="data:image/png;base64,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"
        class="footerImg" alt="footer_image" /></div>
</div>

  );
};

export default FooterSection;