import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ponies = [
  {
    id: 1,
    name: 'Звёздочка',
    type: 'Единорог',
    color: 'Лавандовый',
    talent: 'Магия звёзд',
    image: 'https://cdn.poehali.dev/projects/b939a6a1-21e1-4be5-8c81-7519e44b1909/files/a751aea0-910b-4575-b68c-e3f70f98a0e3.jpg',
    description: 'Добрая и мудрая единорог, которая владеет звёздной магией'
  },
  {
    id: 2,
    name: 'Радуга',
    type: 'Пегас',
    color: 'Розовый',
    talent: 'Полёты и радуга',
    image: 'https://cdn.poehali.dev/projects/b939a6a1-21e1-4be5-8c81-7519e44b1909/files/87e5755a-9d99-49dd-9c2d-e75fca81c093.jpg',
    description: 'Весёлая пегас, которая раскрашивает небо радугой'
  },
  {
    id: 3,
    name: 'Цветочек',
    type: 'Земная пони',
    color: 'Мятный',
    talent: 'Садоводство',
    image: 'https://cdn.poehali.dev/projects/b939a6a1-21e1-4be5-8c81-7519e44b1909/files/17a3a544-053d-48e4-b8ce-0019394218b2.jpg',
    description: 'Заботливая пони, которая выращивает самые красивые цветы'
  }
];

const Sparkle = ({ delay = 0, top = '10%', left = '20%' }) => (
  <div 
    className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
    style={{ 
      top, 
      left, 
      animationDelay: `${delay}s` 
    }}
  />
);

const Index = () => {
  const [selectedPony, setSelectedPony] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100" />
      
      <Sparkle delay={0} top="10%" left="10%" />
      <Sparkle delay={0.5} top="20%" left="85%" />
      <Sparkle delay={1} top="70%" left="15%" />
      <Sparkle delay={1.5} top="80%" left="90%" />
      <Sparkle delay={2} top="40%" left="50%" />
      <Sparkle delay={0.3} top="60%" left="75%" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            ✨ Волшебный мир пони ✨
          </h1>
          <p className="text-2xl text-purple-600">
            Познакомься с нашими друзьями!
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Icon name="Users" size={32} className="text-purple-500" />
            <h2 className="text-4xl font-bold text-purple-700">
              Персонажи
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ponies.map((pony, index) => (
              <Card 
                key={pony.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-4 border-purple-200 bg-white/90 backdrop-blur overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedPony(selectedPony === pony.id ? null : pony.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={pony.image} 
                    alt={pony.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Sparkles" size={24} className="text-pink-500 animate-float" />
                    <h3 className="text-2xl font-bold text-purple-800">
                      {pony.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 text-purple-700">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={18} className="text-yellow-500" />
                      <span className="font-semibold">Тип:</span> {pony.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={18} className="text-pink-500" />
                      <span className="font-semibold">Цвет:</span> {pony.color}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wand2" size={18} className="text-purple-500" />
                      <span className="font-semibold">Талант:</span> {pony.talent}
                    </div>
                  </div>

                  {selectedPony === pony.id && (
                    <div className="mt-4 pt-4 border-t-2 border-purple-200 animate-fade-in">
                      <p className="text-purple-600 italic">
                        {pony.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Icon name="Images" size={32} className="text-pink-500" />
            <h2 className="text-4xl font-bold text-pink-700">
              Галерея
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ponies.map((pony, index) => (
              <div 
                key={`gallery-${pony.id}`}
                className="group relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={pony.image} 
                  alt={pony.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <Icon name="Heart" size={24} className="text-pink-300" />
                      {pony.name}
                    </h3>
                    <p className="text-white/90">{pony.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="Sparkles" size={32} className="text-yellow-300 animate-sparkle" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur rounded-full px-8 py-4 shadow-xl">
            <p className="text-purple-700 text-lg flex items-center gap-2">
              <Icon name="Heart" size={24} className="text-pink-500 animate-float" />
              Сделано с магией и любовью
              <Icon name="Sparkles" size={24} className="text-purple-500 animate-float" />
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
