export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    // return total.toString();
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:返却値型指定</p>
      <button onClick={onClickPractice}>3を実行</button>
    </div>
  );
};
