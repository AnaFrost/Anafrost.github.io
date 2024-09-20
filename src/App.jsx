import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='wrapper'>
        <h1 className='title'>ᛝДень рождения в берлоге эльфаᛝ</h1>
        <div className='dividing-line' />
        <p className='description'>
          Приглашаю вас на празднование моего 31 дня рождения 02.11 в 13:00
          <br />
          Место проведения: Берлога эльфа
          <br />
          Место сбора: Культура с 12:20 до 12:40
        </p>
        <div className='dividing-line' />
        <p className='description'>
          Развлекательная программа: <br />
          Будем делать свечи из вощины и в кокосовой скорлупе, каждая сможет
          выбрать аромат и украшение свечи себе по душе
          <br />
          После мастер-класса будет торт и чай из алтайских трав, можно будет
          сделать фотографии в лесной фотозоне
        </p>
        <p className='description'>
          Место атмосферное и мне хочется поддержать настроение этой встречи
          <br />
          Буду рада если вы найдете в своем гардеробе вещи цветов:
          <div className='color-ref'>
            <div className='color-box gray'>
              <span className='color-badge'>Gray</span>
            </div>
            <div className='color-box brown'>
              <span className='color-badge'>Brown</span>
            </div>
            <div className='color-box green'>
              <span className='color-badge'>Green</span>
            </div>
            <div className='color-box beige'>
              <span className='color-badge'>Baige</span>
            </div>
            <div className='color-box white'>
              <span className='color-badge'>White</span>
            </div>
          </div>
          <br />
          Точное совпадение не обязательно :)
        </p>
        <div className='dividing-line' />
        <p className='description'>
          Буду рада провести с вами этот день, до встречи и не забудте хорошее
          настроение, будем колдунствовать✨
        </p>
      </div>
    </div>
  );
}

export default App;
