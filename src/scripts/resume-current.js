// Пока что скрипты подключила по-старинке и css файл тоже отдельно, чтобы не мешать это все в основную ветку
// Думаю можно скорректировать подключения, а также ссылку на новую страничку в самом конце перед сдачей

// Конфигурационный объект

const templateElementConfig = {
  resumeCurrentTemplateBlock: '#template',
  resumeCurrentCard: '.resume-current__card',
  resumeCurrentJob: '.resume-current__subtitle',
  resumeCurrentDescription: '.resume-current__description',
  resumeCurrentSkills: '.resume-current__skills',
  resumeCurrentSkill: 'resume-current__skill',
  resumeCurrentGrafic: '.resume-current__grafic',
  resumeCurrentPay: '.resume-current__pay',
  resumeCurrentPublished: '.resume-current__published',
  resumeCurrentImage: '.resume-current__image'
}

// Функция добавления карточки-резюме

// Каждое резюме обернуто в ссылку на полный вариант с классом resume-current__link, нужно прописать ссылки в массиве и провести с ними все следующие шаги
// То же касается и ховеров на каждой карточке при наведении. Ховер содержит название (пускай это будет специальность, у нас в объекте это элементы job) и описание (предлагаю там указать города к примеру)
// как выглядят эти ховеры в идеале можно увидеть на нынешней страничке "Вакансии", я оставила их стили, должны сработать

const templateElement = document.querySelector('#template').content;

function createCard(templateElementConfig, arrayElement) {
  const resumeCurrentTemplate = templateElement.querySelector(templateElementConfig.resumeCurrentCard).cloneNode(true);

  const resumeCurrentTemplateJob = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentJob);
  const resumeCurrentTemplateDescription = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentDescription);
  const resumeCurrentTemplateSkills = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentSkills);
  const resumeCurrentTemplateGrafic = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentGrafic);
  const resumeCurrentTemplatePay = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPay);
  const resumeCurrentTemplatePublished = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPublished);
  const resumeCurrentTemplateImage = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentImage);

  resumeCurrentTemplateJob.textContent = arrayElement.name;
  resumeCurrentTemplateDescription.textContent = arrayElement.description;

  const resumeCurrentSkills = Array.from(arrayElement.skills);
  resumeCurrentSkills.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.classList.add(templateElementConfig.resumeCurrentSkill);
    spanElement.textContent = item.textContent;
    resumeCurrentTemplateSkills.append(spanElement);
  });

  resumeCurrentTemplateGrafic.textContent = arrayElement.grafic;
  resumeCurrentTemplatePay.textContent = arrayElement.pay;
  resumeCurrentTemplatePublished.textContent = arrayElement.published;
  resumeCurrentTemplateImage.src = arrayElement.image;
  resumeCurrentTemplateImage.alt = arrayElement.name;

  return resumeCurrentTemplate;
};

// Создание карточки для каждого элемента массива

resumeList.forEach((arrayElement) => {
  const resumeContainer = document.querySelector('.resume-current__main');
  resumeContainer.append(createCard(templateElementConfig, arrayElement));
});
