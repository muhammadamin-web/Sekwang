// Modal oynani tanlash va uni yopish funksiyalarini tuzish
let modal1 = document.getElementById("myModal_telegram_message");
// let span = document.getElementsByClassName("close")[0];


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

function showModal() {
  modal1.style.display = "block";
  setTimeout(function(){
    modal1.style.display = "none";
  }, 2000);
}

async function sendToTelegramBot(formData) {
  const token = '6539199168:AAElO5kKuWZSleduQ523DTvWYVyRrhm01yY';
  const chat_id = '-1001819808922';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const message = `Ism: ${formData.name}\nTel: ${formData.tel}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API bilan muammo yuz berdi');
    }
  } catch (error) {
    console.error('Xatolik:', error);
  }
}

// Formani yuborish, murojaatni o'zgartirish va modal oynani ko'rsatish
document.querySelector('#myForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: event.target.name.value,
    tel: event.target.tel.value,
  };

  await sendToTelegramBot(formData);

  showModal();

  event.target.reset();
  document.querySelector('#myFormContainer').innerHTML = '<p>Murojaat jo\'natildi!</p>';
});
