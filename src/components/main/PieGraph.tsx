import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import useSummonerData from "../../hooks/useSummonerData";
import useTeamInfo from "../../hooks/useTeamInfo";

const PieGraph = ({ gameData }: any) => {
  const { puuId }: any = useSummonerData(); // Adjust this according to your code
  const { win, lose } = useTeamInfo(gameData, puuId);

  const data = [
    { name: "Wins", value: win },
    { name: "Losses", value: lose },
  ];

  const COLORS = ["#5382e9", "#e84057"];
  const totalGames = data.reduce((sum, entry) => sum + entry.value, 0);
  const winRate = (data[0].value / totalGames) * 100;

  return (
    <div style={{ width: "88px", height: "88px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={27}
            outerRadius={40}
            fill="#8884d8"
            dataKey="value"
            stroke="none" // 이 부분 추가
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={`${winRate.toFixed(0)}%`}
              position="center"
              fontSize={12}
              fontStyle={"#5383E8"}
              fill="#5383E8"
              fontWeight="bold"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
