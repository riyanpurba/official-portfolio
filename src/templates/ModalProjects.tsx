import Image from "next/image";
import { FC } from "react";

interface ModalProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  detail: {
    image: string;
    title: string;
    description: string;
    tech: { name: string; slug: string }[];
    url: string;
  } | null;
}

const ModalProjects: FC<ModalProjectsProps> = ({ isOpen, onClose, detail }) => {
  if (!isOpen || !detail) return null;

  return (
    <>
      <div
      className="absolute justify-center items-center flex overflow-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none modalproject"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <div className="flex items-center font-mono">
              <div className="rounded-md bg-gray-800 shadow-lg">
                <div className="flex items-start p-4 leading-none max-w-4xl">
                  <div className="flex-none ">
                  <Image
                    src={detail.image}
                    alt="pic"
                    className="h-auto w-80 rounded-md transform border-4 border-gray-300 shadow-lg"
                  />           
                  </div>

                  <div className="relative px-4 flex-col text-gray-300">
                    <button type="button" onClick={onClose} className="absolute right-0 top-0 border border-white text-white font-semibold rounded-full w-8 h-8 transition duration-500 ease select-none hover:bg-black focus:outline-none focus:shadow-outline cursor-pointer">&times;</button>
                    <p className="text-2xl font-bold m">{detail.title}</p>
                    {/* <hr className="hr-text" data-content="" /> */}
                    <div className="text-md flex justify-between">
                      {/* <span className="font-bold">2h 2min | Crime, Drama, Thriller</span> */}
                      {/* <span className="font-bold"></span> */}
                    </div>
                    <p className="my-5 block text-sm text-left">{detail.description}</p>
                    <span className="text-sm font-medium">Technology :</span>
                    <ul className="mt-3 mb-5 flex items-center justify-start gap-5">
                      {
                        detail.tech.map((item, index) => (
                          <li key={index}>
                            <Image src={"/icon/" + item.slug + ".svg"} width={30} height={30} alt="" />
                          </li>
                        ))
                      }
                    </ul>
                    <div className="text-xs flex gap-4">
                      <a href={detail.url} target="_black" className="border border-white text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Visit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export { ModalProjects }