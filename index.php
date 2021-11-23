<?php include("includes/nav.php"); ?>




    >
<div id="main">
    <div class="container">

    



        <?php
       
       
        
            if(isset($_GET['home'])) {
                include('home.php');
                echo '<script>
                document.title="Home | Osama Abdellatif";
            </script>';
            }

            else if(isset($_GET['projects'])) {
                include('projects.php');
                echo '<script>
                document.title="Projects | Osama Abdellatif";
            </script>';
            }

            else if(isset($_GET['profile'])) {
                include('profile.php');
                echo '<script>
                document.title="Profile | Osama Abdellatif";
            </script>';
            }
            else if(isset($_GET['msg_done'])) {
                include('message_done.php');
                echo '<script>
                document.title="Message Sent | Osama Abdellatif";
            </script>';
            }
            else if(isset($_GET['msg_fail'])) {
                include('message_fail.php');
                echo '<script>
                document.title="Try Again please! | Osama Abdellatif";
            </script>';
            }

            else if(isset($_GET['brain'])) {
                include('brain.php');
                echo '<script>
                document.title="Plans | Osama Abdellatif";
            </script>';
            }
            else if(isset($_GET['contact'])) {
                include('contact.php');
                echo '<script>
                document.title="Contact Me | Osama Abdellatif";
            </script>';
            }

            /*Projects Include*/
            else if(isset($_GET['pingpong'])) {
                include('projects/back/project1.php');
                echo '<script>
                document.title="PingPong | Osama Abdellatif";
            </script>';
            }

            else if(isset($_GET['Doodle'])) {
                include('projects/back/project2.php');
                echo '<script>
                document.title="Doodle | Osama Abdellatif";
            </script>';
            }

            else if(isset($_GET['ValidationForm'])) {
                include('projects/back/project3.php');
                echo '<script>
                document.title="Validation | Osama Abdellatif";
            </script>';
            }


            else if(isset($_GET['OnlineStore'])) {
                include('projects/back/project4.php');
                echo '<script>
                document.title="Validation | Osama Abdellatif";
            </script>';
            }


            else if(isset($_GET['Company'])) {
                include('projects/back/project5.php');
                echo '<script>
                document.title="Company Web | Osama Abdellatif";
            </script>';
            }



            else {
                include('home.php');
            }


        
        
        ?>
    </div>
</div>
    
<?php include("includes/header.php") ?>