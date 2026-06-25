import organic from "../assets/organic.png";
import delivery from "../assets/delivery.png";
import payment from "../assets/payment.png";
function Feature(){
    return(
    <div>
      <p className="text-center pt-12 text-xl text-green-700 font-bold">WHAT WE OFFER</p>
      <div className="flex gap-30 pt-10 pl-50">
      <div className="
        border-2 border-gray-300
        h-80 w-70 pt-8 pl-10 pr-10
        bg-white rounded-lg
        shadow-lg
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-2
        hover:scale-105
        hover:border-white
        hover:ring-4
        hover:ring-orange-500">
        <img src={organic} className="w-50 h-35 "/>
        <p className="text-green-700 font-bold text-xl pl-4 pt-4 text-center">Fresh and Organic</p>
        <p className="text-sm text-center">Discover farm-fresh vegetables and fruits grown naturally to nourish your body and support a healthy lifestyle.</p>
      </div>
      <div className="border-gray-300 h-80 w-70 pt-3 pl-10 pr-10 bg-white border-1">
        <img src={delivery} className="w-50 h-40"/>
        <p className="text-green-700 font-bold text-xl pl-4 pt-4 text-center">Fresh and Organic</p>
        <p className="text-sm text-center">Discover farm-fresh vegetables and fruits grown naturally to nourish your body and support a healthy lifestyle.</p>
      </div>
      <div className="border-gray-300 h-80 w-70 pt-3 pl-10 pr-10 bg-white border-1">
        <img src={payment} className="w-50 h-40"/>
        <p className="text-green-700 font-bold text-xl pl-4 pt-4 text-center">Fresh and Organic</p>
        <p className="text-sm text-center">Discover farm-fresh vegetables and fruits grown naturally to nourish your body and support a healthy lifestyle.</p>
      </div>
    </div>
    </div>
    );
}
export default Feature;