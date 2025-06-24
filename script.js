async function askRomero() {
 const input = document.getElementById('userInput').value;
 const res = await fetch('/.netlify/functions/askRomero', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ question: input })
 });
 const data = await res.json();
 document.getElementById('response').innerText = data.answer || 'No response from ROMERO';
}