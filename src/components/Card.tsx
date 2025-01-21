import { PinIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data"
      );
      const result = await res.json();

      setCardData(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full mx-52 my-52 max-w-[300px] h-[180px] bg-gradient-to-r from-[#4c00ff] to-[#7000ff] rounded-2xl p-6 flex flex-col justify-between">
        {cardData && (
          <>
            <div className="flex justify-between items-center">
              <div className="text-white text-sm">{cardData.brand}</div>
              <div className="text-white text-sm">CVC {cardData.cvc}</div>
              <div className="text-white text-sm">
                <PinIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold tracking-widest">
                **** **** **** {cardData.last4}
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <div>{cardData.cardholderName}</div>
                <div>
                  {cardData.expiryMonth}/{cardData.expiryYear}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
