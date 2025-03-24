import diaryData from "./diaryData";
import DiaryCard from "./components/DiaryCard";
import Menu from "./components/Menu";
import "./styles.css";
export default function App() {
  /* Challenge 

İki DiaryCard elementi şu anda aşağıdaki verilerle sabit olarak kodlanmıştır. Göreviniz, diaryData.js dosyasındaki 14 günlük verinin tamamı için otomatik olarak DiaryCard elementleri oluşturmak üzere döngünün gücünü kullanmaktır. 

    1. Sabit kodlanmış DiaryCard elementlerinin her ikisi de silinmeli ve yerine toplam 14 
       otomatik olarak oluşturulan elementler eklenmeli. 
    
    2. İlk iki kart orijinal kodlanmış kartlarla aynı görünmeli ve geri kalanı 
       kartlar benzer görünmelidir. 
        
    3. Kodu kısa ve anlaşılır hale getiriniz. 
*/

  return (
    <div>
      <Menu skip={false} />
      <main className="main-container">
        <div className="sub-header">
          <h3>Nisan Raporu</h3>
        </div>
        <div>
          {diaryData.map((data) => {
            return <DiaryCard data={data} key={data.id} />;
          })}
        </div>
      </main>
    </div>
  );
}
