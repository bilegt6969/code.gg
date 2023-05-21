import React from 'react';

function Feed() {
  return (
    <div className="col-span-4">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Attributes</h1>
        <ul className="list-disc mt-4">
          <li>Бүх HTML элементүүд нь атрибуттай байдаг.</li>
          <li>Атрибутууд нь элементийн талаар нэмэлт мэдээлэл өгдөг.</li>
          <li>Атрибутууд нь үргэлж эхлэх tag-т бичигддэг.</li>
          <li>Атрибутууд нь name = "value" буюу нэр = "утга" гэсэн бичиглэлтэй байдаг</li>
        </ul>
      </section>
      <section>
      <h1 className="font-bold mt-8 text-2xl">href</h1>
      <p>HTML-д холбоосыг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "a" }} />&gt; tag-д тодорхойлогддог. Холбоосыг <span className='text-pink-500'>href</span> атрибутад зааж өгнө.</p>

      <h1 className="font-bold mt-8 text-2xl">жишээ код:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
          
        <iframe src="https://codesandbox.io/embed/naughty-rhodes-sqg0yl?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="naughty-rhodes-sqg0yl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

          
        </div>
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold mt-8 text-2xl mb-4">src</h1>
      <p>HTML-д зургийг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "img" }} />&gt; tag-д тодорхойлдог. Зургийн файлын байршлыг <span className='text-pink-500'>src</span> атрибутад зааж өгнө.</p>
      <h1 className="font-bold mt-8 text-2xl mb-4">жишээ код:</h1>

            <iframe src="https://codesandbox.io/embed/musing-blackwell-5jhn7e?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="musing-blackwell-5jhn7e"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

          
        </div>
      </section>
      <section>
      <h1 className="font-bold mt-8 mb-4 text-2xl">width, height</h1>
      <p className='mb-4'>HTML-д зургийн өргөн болон өндрийг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "width" }} />&gt;, &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "height" }} />&gt; атрибутад зааж өгдөг.</p>
      <iframe src="https://codesandbox.io/embed/throbbing-moon-h95j89?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="throbbing-moon-h95j89"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <p className='mt-4'>Өргөн болон өндрийн анхдагч утгыг цэгээр зааж өгсөн байдаг. height="400" гэдэг нь зургийн өргөн 400 pixels гэсэн үг юм.

</p>



      </section>
      <section>
      <h1 className="font-bold mt-8 mb-4 text-2xl">alt</h1>
      <p className='mb-4'>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "alt" }} />&gt; атрибутад зургийг харуулах боломжгүй үед оронд нь гарч ирэх тайлбар текcтыг зааж өгнө.</p>
      <iframe src="https://codesandbox.io/embed/fervent-mopsa-5e5961?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="fervent-mopsa-5e5961"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      </section>

      <section>
      <h1 className="font-bold mt-8 mb-4 text-2xl">style</h1>
      <p className='mb-4'>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "style" }} />&gt; атрибутад өнгө, үсгийн хэмжээ гэх мэт маш олон утгыг зааж өгч болдог. өнгө, үсгийн хэмжээ гэх мэт маш олон утгыг зааж өгч болдог.</p>
      <iframe src="https://codesandbox.io/embed/hardcore-lichterman-86vsxy?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="hardcore-lichterman-86vsxy"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
     </section>

     <section>
      <h1 className="font-bold mt-8 mb-4 text-2xl">Lang</h1>
      <p className='mb-4'>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "lang" }} />&gt; атрибутад &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "html" }} />&gt;хуудасны хэлийг зааж өгнө. Хэлийг зарлах нь хайлтын системд чухал ач холбогдолтой байдаг</p>
      <iframe src="https://codesandbox.io/embed/rough-paper-0jku5d?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="rough-paper-0jku5d"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
     </section>
     <section>
      <h1 className="font-bold mt-8 mb-4 text-2xl">Title</h1>
      <p className='mb-4'>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "p" }} />&gt; элементэд &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "title" }} />&gt; атрибутыг ашиглаж үзье. Догол мөрд бичсэн текст дээр mouse очиход Title-ийн утга tooltip хэлбэрээр бидэнд харагдах болно</p>
      <iframe src="https://codesandbox.io/embed/winter-grass-6i6n9o?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="winter-grass-6i6n9o"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
     </section>

        
        
       
      </div>
  );
}

export default Feed;
