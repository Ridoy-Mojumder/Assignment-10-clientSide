

const AddCraft = () => {
    return (
        <div>
             <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Add New Craft Item</h1>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium">Title</label>
                    <input type="text" id="title" name="title" className="w-full border rounded px-4 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block font-medium">Type</label>
                    <input type="text" id="type" name="type" className="w-full border rounded px-4 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium">Description</label>
                    <textarea id="description" name="description" className="w-full border rounded px-4 py-2" rows="4"></textarea>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Craft</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddCraft;