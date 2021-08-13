export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClickPractice}>1を実行</button>
    </div>
  );
};
