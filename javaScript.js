
//make changes 
//events

<select id="colorDropdown" onchange="showColor()">
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
</select>

<script>
    function showColor() {
        const color = document.getElementById("colorDropdown").value;
        alert(Selected color: ${color});
    }
</script>

<body onload="welcomeMessage()">

<script>
    function welcomeMessage() {
        alert("Page Loaded!");
    }
</script>
</body>


<button onclick="changeText(this)">Click me</button>

<script>
    function changeText(button) {
        button.innerText = "Clicked!";
    }
</script>


<input type="text" onkeypress="countKeyPresses()">
<p>Key Press Count: <span id="keyCount">0</span></p>

<script>
    let count = 0;
    function countKeyPresses() {
        count++;
        document.getElementById("keyCount").innerText = count;
    }
</script>


<input type="text" onkeyup="convertToUppercase()">
<p>Uppercase Text: <span id="uppercaseText"></span></p>

<script>
    function convertToUppercase() {
        const inputText = event.target.value;
        document.getElementById("uppercaseText").innerText = inputText.toUpperCase();
    }
</script>








