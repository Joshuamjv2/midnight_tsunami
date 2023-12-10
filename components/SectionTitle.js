export default function SectionTitle({title, size = "text-xl"}){
    return (
        <h2 className={`mb-4 font-bold ${size} text-[#8001ff] uppercase`}>{title}</h2>
    )
}