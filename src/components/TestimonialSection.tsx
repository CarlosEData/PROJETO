
import CTAButton from './CTAButton';
import josuelDepoimento from '../assets/josueldepoimento.png'
import brunadepoimento from '../assets/brunadepoimento.png'
import andreiadepoimento from '../assets/andreiadepoimento.png'
const testimonials = [
  {
    name: "Josuel Jesus",
    vehicle: "Honda FIT",
    image: [josuelDepoimento],
    text: "Melhor serviço de troca de fluídos da região, troquei óleo de câmbio e motor do meu Honda FIT, Serviços diferenciados, com profissionais dedicado e atenciosos. Valeu Guilherme por ter deixado meu carro ainda melhor Man, forte abraço! Até a próxima."
  },
  {
    name: "Bruna Matias",
    vehicle: "HB20s",
    image: [brunadepoimento],
    text: "SUPER RECOMENDO, fiz a troca de óleo do câmbio automático do meu Hb20s, o atendente Bruno superou todas as expectativas, fizeram teste do óleo que estava no câmbio (nível, odor e cor), fizeram o teste de rodagem e depois efetuaram a troca do óleo, limparam o motor, trocaram filtro do câmbio, fizeram manutenção no cárter, simplesmente amei, sai com o carro com o funcionamento perfeito e sem nenhum ruído. Além da agilidade no atendimento e no serviço. Parabéns pelo ótimo trabalho Bruno."
  },
  {
    name: "Roberto Almeida",
    vehicle: "Jeep Compass 2020",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUIGHaNsgX0JZjUYaKkzyM8t3rZ9lWruWeSP3PpTOn5Ikh85OcTZA=w72-h72-p-rp-mo-ba1-br100",
    text: "Já havia feito a troca em outro lugar mas continuava com problemas. Depois que fiz aqui, o câmbio ficou perfeito. A diferença é nítida quando o serviço é feito com equipamento adequado."
  },
  {name: "Andreia Araujo",
    vehicle: "2 semanas atras",
    image: [andreiadepoimento],
    text: "Atendimento muito eficiente e justo. Já realizo troca de óleo com a loja há alguns anos e retornei para troca de óleo de câmbio automático. Seguro e preço justo. Óleo correto de acordo com as especificações do veículo. Excelente atendimento feito pelo Guilherme. Super indico"


  },
  {name: "Mateus Guilherme",
    vehicle: "3 meses atrás",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVYtyR4wQq0PsJ6pzvt-Ge4BUwfiPPjJgoBQTqxYBj9-X7Ls983kQ=w144-h144-p-rp-mo-br100",
    text: "Ótimo atendimento, excelente troca de óleo câmbio automático."


  },
  {name: "Jonattas Jhol",
    vehicle: "4 meses atrás",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUqLgKtIzNgIwS3jD1NiZrGAQiF5V3CoTKc42pNUUcxLLsWJkTvig=w144-h144-p-rp-mo-ba2-br100",
    text: "Maravilhoso... Atendimento topp só levo meu carro lá pra trocar óleo e qualquer outro tipo de fluído"


  }

];

const TestimonialSection = () => {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-[#1B263B]">
          O que nossos clientes dizem
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700 max-w-2xl mx-auto">
          Mais de 98% dos nossos clientes recomendam nosso serviço de troca de óleo de câmbio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-[#1B263B]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
              <div className="mt-4 text-[#FF6B00]">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
        
      <div className="mt-12 text-center flex flex-col items-center">
          <p className="text-lg mb-6 text-gray-800 max-w-2xl mx-auto">
            Junte-se aos nossos clientes satisfeitos. Seu câmbio merece o melhor tratamento!
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;