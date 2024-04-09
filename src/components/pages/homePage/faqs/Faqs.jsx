import React from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";



const Faqs = () => {
  return (
    <div className="ms-3 me-3">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
              <h2 className="mb-8 text-3xl font-bold">
                Frequently asked questions
              </h2>
              <p className="mb-2 font-bold">Anim pariatur cliche reprehenderit?</p>
              <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>
              <p className="mb-2 font-bold">
                Non cupidatat skateboard dolor brunch?
              </p>
              <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>
              <p className="mb-2 font-bold">
                Praesentium voluptatibus temporibus consequatur non aspernatur?
              </p>
              <p className="mb-8 text-neutral-500 dark:text-neutral-300">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>

              <p className="mb-2 font-bold">
                Voluptatum magnam sed fugit iusto minus et suscipit?
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Laudantium perferendis, est alias iure ut veniam suscipit
                dolorem fugit. Et ipsam corporis earum ea ut quae cum non iusto
                blanditiis ipsum dolor eius reiciendis, velit adipisci quas.
              </p>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6">
              <p className="mb-8 font-bold">
                Did not find your answer in the FAQ? Contact our sales
              </p>
              <htmlForm>
                <div className="relative mb-6" data-te-input-wrapper-init>
                <Input label="Name" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                <Input label="Email Address" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                <Textarea label="Message" />
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                <Checkbox label="Remember Me" />
                </div>
                <Button fullWidth>Send</Button>
              </htmlForm>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faqs;
