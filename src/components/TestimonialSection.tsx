
import CTAButton from './CTAButton';

const testimonials = [
  {
    name: "Sidney Moreira",
    vehicle: "Caoa Chery Tiggo5x",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVRFajGSaOur4b8zS_MBUIevriCz2PYRBaOR0zJ3NFvAbJ3xH30=w72-h72-p-rp-mo-ba1-br100",
    text: "Troquei o óleo de câmbio do meu tiggox5 super recomendo bom serviço.Obrigada Igor Sanatana que fez o serviço de troca de óleo do meu carro"
  },
  {
    name: "Diego Rodrigues",
    vehicle: "Honda Fit",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWEwo4xCSPix4LrBBgBh1dPyWhOmzmXFS3pQyl44Wx8N48xI5pABA=w72-h72-p-rp-mo-ba1-br100",
    text: "Levei o meu honda fit automatico para trocar o oleo de cambio,chegando la quem me atendeu foi o Lucas, o mesmo fez o serviço completo, obrigado Lucas pelo Trampo prestado e tambem pelas informaçãoes que foi me passando, transparência e clareza  do serviço!"
  },
  {
    name: "Roberto Almeida",
    vehicle: "Jeep Compass 2020",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUIGHaNsgX0JZjUYaKkzyM8t3rZ9lWruWeSP3PpTOn5Ikh85OcTZA=w72-h72-p-rp-mo-ba1-br100",
    text: "Já havia feito a troca em outro lugar mas continuava com problemas. Depois que fiz aqui, o câmbio ficou perfeito. A diferença é nítida quando o serviço é feito com equipamento adequado."
  },
  {name: "Ernandes Pedro",
    vehicle: "6 meses atras",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWEiIlZWYf9J8BEhcuL3veLn-1c8e1oCPM-DEfnsQ2oQn52ZLs86A=w144-h144-p-rp-mo-ba2-br100",
    text: "Ótimo atendimento e profissionalismo impecável. Melhor serviço do tipo na região oeste!"


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