<script>
            var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");
            function openTab(event, tabname){
                for(let tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for(let tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classlist.add("active-link");
                document.getElementsById(tabname).classList.add("active-tab");
            }
        </script>
        

        <script>

            var sidemenu= document.getElementById("sidemenu");
            function openmenu(){
                sidemenu.style.right ="0";
            }
            function closemenu(){
                sidemenu.style.right ="-200px";
            }
        </script>
