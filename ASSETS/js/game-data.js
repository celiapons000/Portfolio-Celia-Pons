const gameData = {
  ana: {
    name: "ANA",
    className: "ana",
    background: "ASSETS/IMG/screens/bg-ana-park.png",

    expressions: {
      happy: "ASSETS/IMG/characters/ana-happy.png",
      surprised: "ASSETS/IMG/characters/ana-surprised.png",
      angry: "ASSETS/IMG/characters/ana-angry.png",
      sad: "ASSETS/IMG/characters/ana-sad.png",
      tired: "ASSETS/IMG/characters/ana-tired.png"
    },

    startStep: "intro",

    steps: {
      intro: {
        expression: "happy",
        text: "Ana tiene 70 años y vive sola. Su pensión apenas le alcanza para cubrir los gastos básicos del mes. Esta semana tiene que decidir qué pagar primero.",
        choices: [
          { text: "Comprar comida", next: "food_1" },
          { text: "Pagar la luz", next: "light_1" }
        ]
      },

      food_1: {
        expression: "surprised",
        text: "Ana compra comida para poder pasar la semana, pero al hacerlo no le queda dinero suficiente para pagar el recibo de la luz.",
        choices: [
          { text: "Pedir ayuda", next: "food_help_1" },
          { text: "Esperar unos días", next: "food_wait_1" }
        ]
      },

      light_1: {
        expression: "surprised",
        text: "Ana paga la luz para evitar un corte, pero se queda casi sin dinero para comprar comida durante el resto de la semana.",
        choices: [
          { text: "Comer menos", next: "light_eat_less_1" },
          { text: "Pedir fiado", next: "light_credit_1" }
        ]
      },

      food_help_1: {
        expression: "angry",
        text: "Ana intenta pedir ayuda, pero le piden papeles, llamadas y citas. Se enfada porque necesita una solución ahora, no dentro de varias semanas.",
        choices: [
          { text: "Insistir otra vez", next: "food_help_insist_1" },
          { text: "Rendirse", next: "food_help_giveup_1" }
        ]
      },

      food_wait_1: {
        expression: "angry",
        text: "Ana espera unos días pensando que podrá arreglarlo, pero el aviso de corte llega antes. Se siente atrapada por no haber tenido margen real para decidir.",
        choices: [
          { text: "Llamar a la compañía", next: "food_wait_call_1" },
          { text: "No decir nada", next: "food_wait_silence_1" }
        ]
      },

      light_eat_less_1: {
        expression: "angry",
        text: "Ana intenta comer menos para que el dinero dure, pero empieza a sentirse débil. Le da rabia tener que elegir entre cuidarse o pagar facturas.",
        choices: [
          { text: "Aguantar", next: "light_eat_less_hold_1" },
          { text: "Pedir comida", next: "light_eat_less_ask_1" }
        ]
      },

      light_credit_1: {
        expression: "angry",
        text: "Ana pide fiado en una tienda del barrio. Aunque la ayudan, se siente avergonzada por tener que depender de favores para algo tan básico.",
        choices: [
          { text: "Aceptar la ayuda", next: "light_credit_accept_1" },
          { text: "Rechazarla", next: "light_credit_reject_1" }
        ]
      },

      food_help_insist_1: {
        expression: "sad",
        text: "Ana insiste, pero vuelve a recibir la misma respuesta: tiene que esperar. La burocracia avanza demasiado lento para una urgencia real.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir esperando", next: "failed" }
        ]
      },

      food_help_giveup_1: {
        expression: "sad",
        text: "Ana deja de intentarlo porque se siente agotada. No es que no quiera pedir ayuda, es que el proceso la supera.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aceptar la situación", next: "failed" }
        ]
      },

      food_wait_call_1: {
        expression: "sad",
        text: "Ana llama a la compañía, pero solo consigue una respuesta automática. Nadie escucha su situación concreta ni le ofrece una salida inmediata.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Volver a llamar", next: "failed" }
        ]
      },

      food_wait_silence_1: {
        expression: "sad",
        text: "Ana decide no decir nada porque no quiere preocupar a nadie. La soledad hace que el problema pese todavía más.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Guardar silencio", next: "failed" }
        ]
      },

      light_eat_less_hold_1: {
        expression: "sad",
        text: "Ana aguanta comiendo menos, pero su cuerpo lo nota. La decisión que parecía responsable termina afectando directamente a su salud.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Resistir", next: "failed" }
        ]
      },

      light_eat_less_ask_1: {
        expression: "sad",
        text: "Ana pide comida, pero se siente culpable por necesitar ayuda. El problema no es solo económico: también afecta a su dignidad.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aceptar ayuda", next: "failed" }
        ]
      },

      light_credit_accept_1: {
        expression: "sad",
        text: "Ana acepta que le fíen comida, pero ahora tiene una nueva deuda pendiente. El problema no desaparece, solo se aplaza.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Intentar pagar luego", next: "failed" }
        ]
      },

      light_credit_reject_1: {
        expression: "sad",
        text: "Ana rechaza la ayuda por vergüenza. Prefiere no deber nada, aunque eso signifique pasar más días con lo mínimo.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "No pedir más", next: "failed" }
        ]
      }
    },

    failed: {
      expression: "tired"
    }
  },

  carlos: {
    name: "CARLOS",
    className: "carlos",
    background: "ASSETS/IMG/screens/bg-carlos-street.png",

    expressions: {
      happy: "ASSETS/IMG/characters/carlos-happy.png",
      surprised: "ASSETS/IMG/characters/carlos-surprised.png",
      angry: "ASSETS/IMG/characters/carlos-angry.png",
      sad: "ASSETS/IMG/characters/carlos-sad.png",
      tired: "ASSETS/IMG/characters/carlos-tired.png"
    },

    startStep: "intro",

    steps: {
      intro: {
        expression: "happy",
        text: "Carlos acaba de llegar a España buscando una vida mejor. No conoce a casi nadie, no tiene casa y necesita encontrar trabajo cuanto antes.",
        choices: [
          { text: "Buscar trabajo", next: "work_1" },
          { text: "Buscar refugio", next: "shelter_1" }
        ]
      },

      work_1: {
        expression: "surprised",
        text: "Carlos pregunta en varios sitios, pero le piden papeles, experiencia y una dirección fija. Sin casa, encontrar trabajo se vuelve casi imposible.",
        choices: [
          { text: "Aceptar cualquier empleo", next: "work_any_1" },
          { text: "Seguir buscando", next: "work_search_1" }
        ]
      },

      shelter_1: {
        expression: "surprised",
        text: "Carlos intenta encontrar un lugar donde dormir, pero los albergues están llenos y las habitaciones son demasiado caras para alguien sin ingresos.",
        choices: [
          { text: "Dormir en la calle", next: "shelter_street_1" },
          { text: "Pedir ayuda", next: "shelter_help_1" }
        ]
      },

      work_any_1: {
        expression: "angry",
        text: "Le ofrecen un trabajo sin contrato y con muy poco dinero. Carlos se enfada porque sabe que se están aprovechando de su necesidad.",
        choices: [
          { text: "Aceptar", next: "work_any_accept_1" },
          { text: "Rechazar", next: "work_any_reject_1" }
        ]
      },

      work_search_1: {
        expression: "angry",
        text: "Carlos sigue buscando, pero cada entrevista termina igual. Sin papeles estables y sin domicilio, nadie quiere darle una oportunidad real.",
        choices: [
          { text: "Mentir sobre su situación", next: "work_search_lie_1" },
          { text: "Decir la verdad", next: "work_search_truth_1" }
        ]
      },

      shelter_street_1: {
        expression: "angry",
        text: "Carlos pasa la noche en la calle. No duerme bien, tiene frío y al día siguiente está demasiado agotado para seguir buscando trabajo.",
        choices: [
          { text: "Seguir caminando", next: "shelter_street_walk_1" },
          { text: "Quedarse allí", next: "shelter_street_stay_1" }
        ]
      },

      shelter_help_1: {
        expression: "angry",
        text: "Carlos pide ayuda, pero le dan una lista de recursos saturados. Siente que todo el mundo le manda a otro sitio, pero nadie resuelve nada.",
        choices: [
          { text: "Ir a servicios sociales", next: "shelter_help_social_1" },
          { text: "Pedir ayuda en la calle", next: "shelter_help_street_1" }
        ]
      },

      work_any_accept_1: {
        expression: "sad",
        text: "Carlos acepta el trabajo, pero cobra tan poco que no puede alquilar una habitación. Trabaja, pero sigue sin un lugar seguro donde dormir.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aguantar", next: "failed" }
        ]
      },

      work_any_reject_1: {
        expression: "sad",
        text: "Carlos rechaza el trabajo injusto, pero se queda sin ingresos. La decisión correcta no le acerca a una vida estable.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir buscando", next: "failed" }
        ]
      },

      work_search_lie_1: {
        expression: "sad",
        text: "Carlos intenta ocultar que no tiene casa, pero la mentira se rompe cuando le piden datos. Vuelve a quedarse fuera.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Intentarlo otra vez", next: "failed" }
        ]
      },

      work_search_truth_1: {
        expression: "sad",
        text: "Carlos dice la verdad, pero la sinceridad no le ayuda. Le agradecen el interés y no vuelven a llamarle.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Esperar llamada", next: "failed" }
        ]
      },

      shelter_street_walk_1: {
        expression: "sad",
        text: "Carlos sigue caminando para no quedarse quieto, pero el cansancio le vence. La ciudad parece enorme cuando no tienes un sitio al que volver.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Resistir", next: "failed" }
        ]
      },

      shelter_street_stay_1: {
        expression: "sad",
        text: "Carlos se queda en el mismo lugar, pero no se siente seguro. Dormir en la calle convierte cualquier ruido en una amenaza.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Esperar al día siguiente", next: "failed" }
        ]
      },

      shelter_help_social_1: {
        expression: "sad",
        text: "En servicios sociales le dan cita para más adelante. Carlos necesita ayuda hoy, pero el sistema no llega a tiempo.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Esperar la cita", next: "failed" }
        ]
      },

      shelter_help_street_1: {
        expression: "sad",
        text: "Carlos pide ayuda en la calle, pero la mayoría pasa de largo. La necesidad se vuelve también vergüenza y aislamiento.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir pidiendo", next: "failed" }
        ]
      }
    },

    failed: {
      expression: "tired"
    }
  },

  maria: {
    name: "MARÍA",
    className: "maria",
    background: "ASSETS/IMG/screens/bg-maria-livingroom.png",

    expressions: {
      happy: "ASSETS/IMG/characters/maria-happy.png",
      surprised: "ASSETS/IMG/characters/maria-surprised.png",
      angry: "ASSETS/IMG/characters/maria-angry.png",
      sad: "ASSETS/IMG/characters/maria-sad.png",
      tired: "ASSETS/IMG/characters/maria-tired.png"
    },

    startStep: "intro",

    steps: {
      intro: {
        expression: "happy",
        text: "María es madre soltera y trabaja para mantener a su hija. El problema es que no siempre tiene con quién dejarla cuando tiene turno.",
        choices: [
          { text: "Ir a trabajar", next: "work_1" },
          { text: "Quedarse con su hija", next: "daughter_1" }
        ]
      },

      work_1: {
        expression: "surprised",
        text: "María decide ir a trabajar, pero no encuentra a nadie que pueda cuidar de su hija a tiempo. Llegar tarde puede costarle el empleo.",
        choices: [
          { text: "Llevarla consigo", next: "work_take_1" },
          { text: "Pedir favor", next: "work_favor_1" }
        ]
      },

      daughter_1: {
        expression: "surprised",
        text: "María se queda con su hija porque no quiere dejarla sola, pero pierde horas de trabajo y sabe que ese dinero le hará falta para pagar el alquiler.",
        choices: [
          { text: "Avisar al trabajo", next: "daughter_call_1" },
          { text: "No avisar", next: "daughter_silence_1" }
        ]
      },

      work_take_1: {
        expression: "angry",
        text: "María lleva a su hija al trabajo, pero le dicen que no puede estar allí. Se enfada porque no le dan ninguna alternativa real.",
        choices: [
          { text: "Insistir", next: "work_take_insist_1" },
          { text: "Volver a casa", next: "work_take_home_1" }
        ]
      },

      work_favor_1: {
        expression: "angry",
        text: "María pide un favor a una vecina, pero no puede depender siempre de la buena voluntad de los demás. La situación se repite cada semana.",
        choices: [
          { text: "Aceptar el favor", next: "work_favor_accept_1" },
          { text: "No molestar", next: "work_favor_reject_1" }
        ]
      },

      daughter_call_1: {
        expression: "angry",
        text: "María llama para explicar la situación, pero en el trabajo le recuerdan que ya ha faltado otras veces. Siente que la están castigando por cuidar.",
        choices: [
          { text: "Pedir comprensión", next: "daughter_call_ask_1" },
          { text: "Prometer que no pasará", next: "daughter_call_promise_1" }
        ]
      },

      daughter_silence_1: {
        expression: "angry",
        text: "María no avisa porque le da miedo perder el trabajo. Pero el silencio empeora las cosas y la ansiedad se le acumula.",
        choices: [
          { text: "Explicarlo después", next: "daughter_silence_explain_1" },
          { text: "Hacer como si nada", next: "daughter_silence_hide_1" }
        ]
      },

      work_take_insist_1: {
        expression: "sad",
        text: "María insiste, pero le dicen que no es posible. Tiene que elegir entre cumplir con el trabajo o cuidar de su hija.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aceptar", next: "failed" }
        ]
      },

      work_take_home_1: {
        expression: "sad",
        text: "María vuelve a casa con su hija y pierde el turno. Ese día no cobra lo suficiente y el mes se vuelve todavía más difícil.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aguantar", next: "failed" }
        ]
      },

      work_favor_accept_1: {
        expression: "sad",
        text: "María acepta el favor, pero se siente culpable. Sabe que no puede construir su vida dependiendo de soluciones improvisadas.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Dar las gracias", next: "failed" }
        ]
      },

      work_favor_reject_1: {
        expression: "sad",
        text: "María decide no pedir más favores, pero entonces vuelve a quedarse sin opción. La independencia se vuelve imposible sin apoyo.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir sola", next: "failed" }
        ]
      },

      daughter_call_ask_1: {
        expression: "sad",
        text: "María pide comprensión, pero le responden que todos tienen problemas. Su situación personal no cabe en los horarios del trabajo.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Esperar respuesta", next: "failed" }
        ]
      },

      daughter_call_promise_1: {
        expression: "sad",
        text: "María promete que no volverá a pasar, aunque sabe que no puede garantizarlo. No depende solo de ella.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Intentar organizarse", next: "failed" }
        ]
      },

      daughter_silence_explain_1: {
        expression: "sad",
        text: "Cuando María intenta explicarlo después, ya es tarde. La confianza en el trabajo se rompe y ella se siente cada vez más acorralada.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Pedir perdón", next: "failed" }
        ]
      },

      daughter_silence_hide_1: {
        expression: "sad",
        text: "María intenta hacer como si nada, pero el problema sigue ahí. No descansar, cuidar y trabajar a la vez la deja sin fuerzas.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir adelante", next: "failed" }
        ]
      }
    },

    failed: {
      expression: "tired"
    }
  },

  jorge: {
    name: "JORGE",
    className: "jorge",
    background: "ASSETS/IMG/screens/bg-jorge-library.png",

    expressions: {
      happy: "ASSETS/IMG/characters/jorge-happy.png",
      surprised: "ASSETS/IMG/characters/jorge-surprised.png",
      angry: "ASSETS/IMG/characters/jorge-angry.png",
      sad: "ASSETS/IMG/characters/jorge-sad.png",
      tired: "ASSETS/IMG/characters/jorge-tired.png"
    },

    startStep: "intro",

    steps: {
      intro: {
        expression: "happy",
        text: "Jorge estudia en la universidad y cada semana tiene entregas, trabajos y exámenes. Apenas tiene tiempo para descansar o ver a sus amigos.",
        choices: [
          { text: "Seguir estudiando", next: "study_1" },
          { text: "Descansar un poco", next: "rest_1" }
        ]
      },

      study_1: {
        expression: "surprised",
        text: "Jorge sigue estudiando para llegar a todo, pero cada tarea trae otra nueva. Aunque trabaja sin parar, siente que siempre va tarde.",
        choices: [
          { text: "Hacerlo todo", next: "study_all_1" },
          { text: "Priorizar entregas", next: "study_priority_1" }
        ]
      },

      rest_1: {
        expression: "surprised",
        text: "Jorge intenta descansar, pero no puede desconectar. Mientras descansa piensa en todo lo que todavía no ha terminado.",
        choices: [
          { text: "Volver al trabajo", next: "rest_return_1" },
          { text: "Quedar con amigos", next: "rest_friends_1" }
        ]
      },

      study_all_1: {
        expression: "angry",
        text: "Jorge intenta hacerlo todo, pero no le salen las horas. Se enfada consigo mismo aunque el problema es una carga imposible.",
        choices: [
          { text: "Dormir menos", next: "study_all_sleep_1" },
          { text: "Entregar rápido", next: "study_all_fast_1" }
        ]
      },

      study_priority_1: {
        expression: "angry",
        text: "Jorge prioriza unas entregas, pero entonces descuida otras. El sistema le exige elegir qué parte de su vida académica sacrificar.",
        choices: [
          { text: "Sacar lo urgente", next: "study_priority_urgent_1" },
          { text: "Pedir prórroga", next: "study_priority_delay_1" }
        ]
      },

      rest_return_1: {
        expression: "angry",
        text: "Jorge vuelve a trabajar sin haber descansado de verdad. Cada vez está más saturado y empieza a notar ansiedad.",
        choices: [
          { text: "Seguir", next: "rest_return_continue_1" },
          { text: "Parar", next: "rest_return_stop_1" }
        ]
      },

      rest_friends_1: {
        expression: "angry",
        text: "Jorge intenta quedar con sus amigos, pero se siente culpable por no estar trabajando. Ni siquiera su tiempo libre se siente libre.",
        choices: [
          { text: "Cancelar plan", next: "rest_friends_cancel_1" },
          { text: "Salir igualmente", next: "rest_friends_go_1" }
        ]
      },

      study_all_sleep_1: {
        expression: "sad",
        text: "Jorge duerme menos para avanzar, pero al día siguiente no puede concentrarse. La falta de descanso empeora todo.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Tomar café", next: "failed" }
        ]
      },

      study_all_fast_1: {
        expression: "sad",
        text: "Jorge entrega rápido, pero no está satisfecho con el resultado. Siente que nunca puede hacer las cosas como le gustaría.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Aceptar la nota", next: "failed" }
        ]
      },

      study_priority_urgent_1: {
        expression: "sad",
        text: "Jorge termina lo urgente, pero lo demás se acumula. La lista no baja, solo cambia de orden.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Seguir entregando", next: "failed" }
        ]
      },

      study_priority_delay_1: {
        expression: "sad",
        text: "Jorge pide una prórroga, pero no siempre se la conceden. Incluso pedir ayuda le hace sentir que está fallando.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Esperar respuesta", next: "failed" }
        ]
      },

      rest_return_continue_1: {
        expression: "sad",
        text: "Jorge sigue trabajando hasta que la ansiedad le bloquea. Quiere avanzar, pero su cuerpo ya no puede más.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Respirar", next: "failed" }
        ]
      },

      rest_return_stop_1: {
        expression: "sad",
        text: "Jorge intenta parar, pero la culpa no le deja descansar. El problema no es solo el trabajo, es no poder desconectar nunca.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Cerrar el ordenador", next: "failed" }
        ]
      },

      rest_friends_cancel_1: {
        expression: "sad",
        text: "Jorge cancela el plan y se queda estudiando. Poco a poco se va quedando sin vida fuera de la universidad.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Estudiar más", next: "failed" }
        ]
      },

      rest_friends_go_1: {
        expression: "sad",
        text: "Jorge sale con sus amigos, pero no disfruta. Está allí físicamente, pero su cabeza sigue en las entregas.",
        choices: [
          { text: "Continuar", next: "failed" },
          { text: "Volver a casa", next: "failed" }
        ]
      }
    },

    failed: {
      expression: "tired"
    }
  }
};