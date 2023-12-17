export default function SectionTitle({title, size = "text-xl"}){
    return (
        <h2 className={`mb-4 font-bold ${size} text-white uppercase`}>{title}</h2>
    )
}