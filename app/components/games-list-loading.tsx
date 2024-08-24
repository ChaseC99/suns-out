import { Skeleton } from "@mui/material";

type GameListLoadingProps = {
    count?: number;
};

export default function GameListLoading({count = 8}: GameListLoadingProps) {
    const gameSkeleton = (
        <Skeleton 
            variant="rounded" 
            width="100%" height={140}  
            sx={{ 
                borderRadius: "10px",
            }}
        />
    )
    
    // Return 4 skeletons to represent 4 games
    return (
        <div style={{display: "flex", gap: 12, flexDirection: "column", margin: "16px 0"}}>
            {Array.from({length: count}).map((_, i) => (
                <div key={i} style={{display: "flex", gap: 12}}>
                    {gameSkeleton}
                </div>
            ))}
        </div>
    );
}