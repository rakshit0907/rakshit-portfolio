export default function PageGlow() {
  return (
    <>
      <div className="fixed top-[-15%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#5E81AC]/10 blur-[180px] pointer-events-none" />

      <div className="fixed bottom-[-20%] right-[-10%] w-[38rem] h-[38rem] rounded-full bg-[#6F93BF]/8 blur-[180px] pointer-events-none" />
    </>
  );
}