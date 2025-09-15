export default function HeroImage() {
  return (
    <div className="relative">
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&auto=format&q=80" 
          alt="Adriana Borges - Especialista em Despigmentação a Laser" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}
