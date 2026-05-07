<?php
session_start();
session_destroy();

echo '<script>
    sessionStorage.clear();
    window.location.href = "index.html";
</script>';
exit();
?>
