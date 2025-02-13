import './home.css'

import {Link, NavLink} from "react-router-dom";
//баннер
function Body (){
    //лого + ссылки + бегущая строка
    return(
        <div>
            
            <div className='container'>
                <div className='promo'>
                    <div className="container_promo">
                        <div className='titlePromo'>
                            <div className="titlePromo_text">
                                <span className='blue_titlePromo'>Staking</span>
                                <span className='black_titlePromo'> USDT<br/>с доходностью до 30.7% в год </span>
                            </div>   
                        </div>

                        <div className="main_promo">
                            <div className='infoPromo'>
                                <div className='text_info_block'>
                                    <p className='timePromo'>USDT 17:39 GMT+5</p>
                                    <p className='coursePromo'>103 USDT</p>
                                    <p className='profitPromo'>+4,19% сегодня</p>
                                    <Link to="registration"><div className='loginButton' >
                                        <p>Зарегистрироваться</p>
                                    </div>  
                                    </Link>

                                    
                                </div>
                            </div> 

                            <div className="table_promo">
                                <div className='container_table'>
                                    <div className='liderStats'>
                                        <p className='title-table'>ТОП-инвесторы</p>
                                        <table cellPadding={10}  className='table'>
                                            <tbody>
                                            <tr className='blue-row-table'>
                                                <td></td>
                                                <td>Инвестор</td>
                                                <td>Капитализация, USDT</td>
                                                <td>Связь в Телеграм</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>1</td>
                                                <td>Бронхов Даниил</td>
                                                <td>89,293,237</td>
                                                <td className='td_blue'>@bron****</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>2</td>
                                                <td>Хлобыстин Григорий </td>
                                                <td>86,841,154</td>
                                                <td className='td_blue'>@hgri****</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>3</td>
                                                <td>Морозов Олег </td>
                                                <td>79,567,821</td>
                                                <td className='td_blue'>@moro****</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>4</td>
                                                <td>Любимова Ирина </td>
                                                <td>75,123,897</td>
                                                <td className='td_blue'>@iral****</td>
                                            </tr>
                                            <tr className='black-row-table'>
                                                <td>5</td>
                                                <td>Чекинзо Архип</td>
                                                <td>62,741,258</td>
                                                <td className='td_blue'>@chec****</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>  
                            </div>
                        </div>                 
                    </div>     
                </div>

                <div className="description_parent">
                    <div className='description_block'>
                        <div className="description_bottom1">
                            <p>Добро пожаловать на официальный сайт нашего криптовалютного хедж-фонда. Мы являемся ведущими экспертами в области инвестиций в криптовалюты и цифровые активы, предлагая нашим клиентам уникальные возможности для увеличения их капитала в быстро развивающемся мире цифровой экономики.</p>
                        </div>
                        <div className="description_bottom2">
                            {/* <p className='blue_word'>### <span className='blackDescr'>Почему стоит доверять нам?</span></p> */}
                        </div>
                        <div className="description_bottom3">
                            <p>Профессионализм и опыт. Наша команда состоит из высококвалифицированных специалистов с глубокими знаниями рынка криптовалют. Мы постоянно анализируем рынок, чтобы
                                предоставлять нашим клиентам самые актуальные и эффективные инвестиционные решения. </p>
                            <p>Индивидуальный подход. Мы понимаем, что каждый инвестор имеет свои цели и предпочтения. Поэтому мы предлагаем индивидуальные инвестиционные стратегии, которые 
                                соответствуют вашим финансовым целям и уровню риска. </p>
                            <p>Прозрачность и безопасность. Мы строго соблюдаем все законодательные и регуляторные требования, обеспечивая высокий уровень прозрачности и безопасности для наших клиентов.
                                Ваши инвестиции защищены современными технологиями безопасности.</p>
                        </div>

                        <div className="description_bottom2">
                            {/* <p className='blue_word'>### <span className='blackDescr'>Наш подход к инвестированию</span></p> */}
                        </div>
                        <div className="description_bottom3">
                            <p>долгосрочном потенциале и стабильности. Наш портфель включает в себя как базовые криптовалюты с проверенной историей, так и перспективные новые проекты, которые проходят
                            строгий отбор на основе анализа рисков и потенциальной доходности.</p>
                        </div>

                        <div className="description_bottom2">
                            {/* <p className='blue_word'>### <span className='blackDescr'>Присоединяйтесь к нам</span></p> */}
                        </div>

                        <div className="description_bottom3">
                            <p>Если вы ищете возможность увеличить свой капитал, эксплуатируя возможности криптовалютного рынка, наш хедж-фонд предлагает надежную платформу для достижения ваших инвестиционных целей. С нами вы можете быть уверены, что ваш капитал работает на вас, открывая доступ к новым финансовым возможностям в мире цифровых активов. </p>
                            <p>Для получения дополнительной информации о наших услугах и как начать сотрудничество, пожалуйста, свяжитесь с нами. Мы готовы ответить на любые ваши вопросы и помочь вам сделать первый шаг к успешным инвестициям в криптовалюту. </p>        
                        </div>
                    </div>

                    <div className='description_block'>
                        <div className="description_bottom1">
                            <p>Дорожная карта развития криптостартапа</p>
                            <p>2021 год</p>
                            
                            <div className="description_bottom4">
                                <p>20 апреля: </p>
                                <p>Основание хедж-фонда, специализирующегося на предоставлении услуг стейкинга USDT с доходностью до 30,7% годовых.</p>
                            </div>

                            
                            <div className="description_bottom4">
                                <p>Май - Декабрь: </p>
                                <p>Разработка и тестирование инфраструктуры, формирование клиентской базы, налаживание партнерских отношений с ключевыми игроками рынка</p>
                            </div>

                            <p>2022 год</p>
                            <div className="description_bottom4">
                                <p>Январь - Июнь: </p>
                                <p>Масштабирование операций, увеличение объема управляемых активов за счет привлечения новых инвесторов.</p>
                            </div>

                            
                            <div className="description_bottom4">
                                <p>Июль - Декабрь: </p>
                                <p> Внедрение дополнительных инструментов для повышения эффективности стейкинга, оптимизация операционных процессов.</p>
                            </div>


                            <p>2023 год</p>
                            <div className="description_bottom4">
                                <p>Январь - Июнь: </p>
                                <p>Разработка и тестирование прототипа сервиса NextCryptoPool, направленного на упрощение процесса инвестирования в криптовалюты.</p>
                            </div>

                            
                            <div className="description_bottom4">
                                <p>Июль - Декабрь: </p>
                                <p>Подготовка к запуску сервиса NextCryptoPool, маркетинговая кампания для привлечения пользователей.</p>
                            </div>

                            <p>2024 год</p>
                            <div className="description_bottom4">
                                <p> Январь - Март: </p>
                                <p>Запуск сервиса NextCryptoPool. Сбор обратной связи от пользователей, корректировка функционала в соответствии с потребностями рынка.</p>
                            </div>

                            
                            <div className="description_bottom4">
                                <p>Апрель - Июнь: </p>
                                <p>Планирование масштабирования деятельности, разработка стратегии выпуска собственной криптовалюты.</p>
                            </div>

                            <div className="description_bottom4">
                                <p>Июль - Декабрь: </p>
                                <p>Разработка и тестирование собственного криптокошелька и биржи. Разработка регуляторной документации для выпуска собственной криптовалюты.</p>
                            </div>

                            <p>2025 год и далее</p>
                            <div className="description_bottom4">
                                <p> Январь - Март: </p>
                                <p>Выпуск собственной криптовалюты. Интеграция собственного криптокошелька и биржи с основными продуктами компании.</p>
                            </div>

                            
                            <div className="description_bottom4">
                                <p>Апрель - Декабрь и далее: </p>
                                <p>Масштабирование деятельности на новые рынки, развитие экосистемы продуктов, укрепление позиций на рынке криптовалют.</p>
                            </div>

                            <div className="description_bottom4">
                                
                                <p>Каждый этап развития предусматривает проведение анализа рынка, оценку рисков и корректировку стратегии в соответствии с изменяющимися условиями рынка. Главной целью является создание устойчивой и динамично развивающейся экосистемы, способной предоставлять высококачественные услуги в области криптовалют.</p>
                            </div>

                           
                            
                        </div>
                        
                    </div>
                </div>           
            </div>
        </div>
       
    )
}

export default Body;